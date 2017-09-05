Rails.application.routes.draw do
	scope '/api' do
		scope '/splash' do
			get '/' => 'api#splash_login'
		end
	end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
