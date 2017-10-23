class Stayover

  attr_accessor :service, :provider, :pet, :service_request

  def initialize(service, provider, pet, service_request)
    @service = service
    @provider = provider
    @pet = pet
    @service_request = service_request
  end

end