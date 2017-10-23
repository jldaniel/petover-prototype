require "base64"

class UsersController < ApplicationController
  include Geokit::Geocoders
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /login
  def login
    puts 'UsersController.login'
    auth_string_encoded = request.headers['Authentication']
    auth_string = Base64.decode64(auth_string_encoded)
    split = auth_string.split('|')
    email = split[0]
    password = split[1]

    @user = User.find_by_email(email)

    user_pass = @user.password
    if password == user_pass
      render json: @user
    else
      render :status => :unauthorized
    end

  end

  # GET /users
  def index
    @users = User.all

    render :json => @users.to_json(include: [:pets, :services])
    #render json: @users
  end

  # GET /users/1
  def show
    puts('GET /user/:id')
    @user = set_user()
    #@pets = Pet.find_by_user_id(@user.id)
    #@services = Service.find_by_user_id(@user.id)
    #@user.pets = @pets
    #@user.services = @services

    # By default only the base object is rendered, this adds in the pets and services
    render :json => @user.to_json(include: [:pets, :services])
  end

  # POST /users
  def create
    puts('POST /users')
    auth_string_encoded = request.headers['Authentication']
    auth_string = Base64.decode64(auth_string_encoded)
    split = auth_string.split('|')
    email = split[0]
    password = split[1]

    # TODO Check if user already exist, if so this call should fail

    @user = User.new({email: email, password: password})

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    puts('Update user called')
    @user = User.find(params[:id])
    puts('Found user')
    puts('Updating with params')
    puts(user_update_params)

    if @user.update_attributes(user_update_params)
      render json:@user
    else
      render json: @user.errors, status: :unprocessable_entity
    end

  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  # GET /:user_id/pets
  def index_pet

  end

  # GET /:user_id/pets/:id
  def show_pet
    @pet = Pet.find(params[:id])
    render json: @pet
  end

  # POST /:user_id/pets
  def add_pet
    puts('Add pet called')
    puts(params)
    @user = User.find(params[:user_id])
    @pet = @user.pets.build(pet_params)
    if @pet.save
      render json: @pet
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  # PUT /:user_id/pets/:id/pets
  def update_pet
    puts('Update pet called')
    puts(params)
    @pet = Pet.find(params[:id])
    puts(pet_update_params)

    if @pet.update_attributes(pet_update_params)
      render json:@pet
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end


  # GET /:user_id/service

  # GET /:user_id/service/:id
  def show_service
    @service = Service.find(params[:id])
    render json:@service
  end

  # POST /:user_id/service
  def add_service
    puts('Add service called')
    puts(params)
    @user = User.find(params[:user_id])
    @service = @user.services.build(service_params)

    if @service.save
      render json: @service
    else
      render json: @service.errors, status: :unprocessable_entity
    end
  end

  # PUT /:user_id/service/:id
  def update_service
    puts('Update service called')
    puts(params)
    @service = Service.find(params[:id])
    puts(service_update_params)

    if @service.update_attributes(service_update_params)
      render json:@service
    else
      render json: @service.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user)
    end

    def user_update_params
      params.require(:user).permit(:first_name, :last_name, :about_me, :picture)
    end

    def pet_params
      params.require(:pet).permit(:name, :about_me, :animal, :picture)
    end

    def pet_update_params
      params.require(:pet).permit(:name, :about_me, :animal, :picture)
    end

    def service_params
      puts("service_params called")
      geocoded_address = MultiGeocoder.geocode(params[:service][:address])

      params.require(:service).permit(
          :name, :about, :rate, :rate_type, :picture).merge(
                                                            lat: geocoded_address.lat,
                                                            lng: geocoded_address.lng)
    end

    def service_update_params
      puts("service_update_params called")
      geocoded_address = MultiGeocoder.geocode(params[:service][:address])

      params.require(:service).permit(
          :name, :about, :rate, :rate_type, :picture).merge(
          lat: geocoded_address.lat,
          lng: geocoded_address.lng)
    end

    def get_user_pets(user)
      @pets = Pet.find(user:id)
    end
end
