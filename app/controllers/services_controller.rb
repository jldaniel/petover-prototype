class ServicesController < ApplicationController

  def index
    puts('/api/services index called')
    search_params = request.parameters
    puts('lat: ' + search_params['lat'])
    puts('lng: ' + search_params['lng'])
  end


end