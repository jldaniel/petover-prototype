class ServicesController < ApplicationController
  include Geokit::Geocoders
  def index

    search_param = request.parameters  # Pull data from get request
    loc = MultiGeocoder.geocode(search_param['addy']) # set variable geocode of value given by
    # the right of addy?= in html GET request

    puts
    puts "Services Controller Index"
    puts "GET request variable caught"
    puts

    begin

      @services = Service.within(10, :origin => loc.ll ) # geocode 10 mile radius magic
      render json: @services
    rescue Exception => e
      puts e.message
      puts "An error has occured with Geokit localizing"
      render json: {}, status: 404
    end

    puts
    puts "/API/services within 10 miles of home"
    puts

  end

  # GET /services/:id
  def show
    puts('GET /services/:id')
    @service = set_service
    render json: @service
  end

  # POST /services
  def create

  end

  # PUT /services/:id
  def update

  end

  # DELETE /services/:id
  def destroy

  end

private
  def set_service
    @service = Service.find(params[:id])
  end


end
