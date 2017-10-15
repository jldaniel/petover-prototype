class RequestsController < ApplicationController

  # The request handling is currently being boxed off to allow for future updates
  # to the request process without interference to the other business logic. Request
  # state information is expected to be handled by the frontend, the server simply
  # maintains persistence

  # GET /api/requests
  def index
    puts 'RequestsController index called'

    # TODO: Extract the search params if they exist
    # Allow filtering by requester, provider, and pet
    @requests = Request.all

    render json: @requests

  end

  # GET /api/requests/:id
  def show
    puts 'RequestsController show called'
    @request = set_request
    render json: request
  end

  # POST /api/requests
  def create
    puts 'RequestsController create called'
    @request = Request.new(request_params)
    if @request.save
      render json: @request
    else
      render json: request.errors, status: :unprocessable_entity
    end
  end

  # PUT /api/requests/:id
  def update
    puts 'RequestsController update called'
    @request = set_request

    if @request.update_attributes(request_update_params)
      render json: @request
    else
      render json: @request.errors, status: :unprocessable_entity
    end


  end

  # DELETE /api/requests/:id
  def destroy
    puts 'RequestsController destroy called'
    Request.destory(params[:id])
  end

  private

    def set_request
      @request = Request.find(params[:id])
    end

    def request_params
      params.require(:request).permit(:requester, :provider, :start, :end, :message, :pet, :state)
    end

    def request_update_params
      params.require(:request).permit(:state)
    end

end