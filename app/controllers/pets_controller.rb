class PetsController < ApplicationController

  # GET /api/pets
  def index
    puts 'PetsController index called'
  end

  # GET /api/pets/:id
  def show
    puts 'PetsController show called'
    @pet = set_pet
    render json: @pet
  end

  # POST /api/pets
  def create
    puts 'PetsController create called'
  end

  # PUT /api/pets/:id
  def update
    puts 'PetsController update called'
  end

  # DELETE /api/pets/:id
  def destroy
    puts 'PetsController destroy called'
  end

private
  def set_pet
    @pet = Pet.find(params[:id])
  end

end