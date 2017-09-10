class BetaloginController < ApplicationController
  # Login logic for /betalogin endpoint to allow qualified beta users to access the site
  # Currently expects the password to be passed in the headers under the Authentication parameter
  def login
    if check_password(request.headers["Authentication"])
      render json: {}, status: 200
    else
      render json: {}, status: 401
    end
  end


private
  def check_password(authentication)
    if authentication == 'catdog'
      true
    else
      false
    end

  end
end