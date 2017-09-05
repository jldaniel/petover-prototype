class ApiController < ApplicationController
	def splash_login

		#puts "GET /api/splash"
		#puts request.headers["Authentication"]
		if check_splash_login(request.headers["Authentication"])
			render json: {}, status: 200
		else
			render json: {}, status: 401
		end
	end


private
	def check_splash_login(authentication)
		if authentication == 'catdog'
			return true
		else
			return false
		end

	end
end