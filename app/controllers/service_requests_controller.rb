class ServiceRequestsController < ApplicationController

  # The request handling is currently being boxed off to allow for future updates
  # to the request process without interference to the other business logic. Request
  # state information is expected to be handled by the frontend, the server simply
  # maintains persistence

  # GET /api/requests
  def index
    puts 'ServiceRequestsController index called'

    # TODO: Extract the search params if they exist
    # Allow filtering by requester, provider, and pet
    @service_requests = ServiceRequest.all

    render json: @service_requests

  end

  # GET /api/requests/:id
  def show
    puts 'ServiceRequestsController show called'
    @service_request = set_service_request
    render json: @service_request
  end

  # POST /api/requests
  def create
    puts 'ServiceRequestsController create called'
    @service_request = ServiceRequest.new(service_request_params)
    if @service_request.save
      render json: @service_request
    else
      render json: @service_request.errors, status: :unprocessable_entity
    end
  end

  # PUT /api/requests/:id
  def update
    puts 'ServiceRequestsController update called'
    @service_request = set_service_request

    if @service_request.update_attributes(service_request_update_params)
      render json: @service_request
    else
      render json: @service_request.errors, status: :unprocessable_entity
    end


  end

  # DELETE /api/requests/:id
  def destroy
    puts 'ServiceRequestsController destroy called'
    ServiceRequest.destroy(params[:id])
  end

  private

    def set_service_request
      @request = ServiceRequest.find(params[:id])
    end

    def service_request_params
      params.require(:service_request).permit(:requester_id, :provider_id, :service_id, :start_date, :end_date, :message, :pet_id, :request_state)
    end

    def service_request_update_params
      params.require(:request).permit(:request_state)
    end

end