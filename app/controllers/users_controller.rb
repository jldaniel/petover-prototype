require "base64"

class UsersController < ApplicationController
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
    if @user.update(user_params)
      render json: @user
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

  end

  # GET /:user_id/service

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user)
    end

    def get_user_pets(user)
      @pets = Pet.find(user:id)
    end
end
