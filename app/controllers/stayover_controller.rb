class StayoverController < ApplicationController

  # Intermediary API for collecting a users stayovers which consist
  # of the service request, the providing user, the associated pet,
  # and the service itself.

  def index
    puts 'StayoverController index called'

    search_params = request.parameters
    puts 'search_params'
    puts(search_params)

    @service_requests = ServiceRequest.where(requester_id: search_params[:userId])

    stayovers = Array.new
    for @sreq in @service_requests
      provider_id = @sreq.provider_id
      puts 'provider_id'
      puts(provider_id)
      pet_id = @sreq.pet_id
      puts('pet_id')
      puts(pet_id)
      service_id = @sreq.service_id
      puts('service_id')
      puts(service_id)

      @provider = User.find(provider_id)
      @pet = Pet.find(pet_id)
      @service = Service.find(service_id)

      stayover = Stayover.new(@service,@provider, @pet, @sreq)
      puts 'Stayover Constructed'
      puts stayover
      stayovers.append(stayover)

    end


    render json: stayovers

  end

end