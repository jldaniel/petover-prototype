class RequestsController < ApplicationController

  # GET /api/requests
  def index
    puts 'RequestsController index called'
  end

  # GET /api/requests/:id
  def show
    puts 'RequestsController show called'
  end

  # POST /api/requests
  def create
    puts 'RequestsController create called'
  end

  # PUT /api/requests/:id
  def update
    puts 'RequestsController update called'
  end

  # DELETE /api/requests/:id
  def destroy
    puts 'RequestsController destroy called'
  end


end