Rails.application.routes.draw do
  scope '/betalogin' do
    get '/' => 'betalogin#login'
  end

  scope '/api' do
    scope '/login' do
      get '/' => 'api_login#login'
    end

    scope '/caretaker' do
      get '/:id' => 'api_caretakers#get_caretaker'
      post '/' => 'api_caretakers#create_caretaker'
      patch '/:id' => 'api_caretakers#update_caretaker'
      delete '/:id' => 'api_caretakers#delete_caretaker'
    end

    scope '/caretakers' do
      get '/' => 'api_caretakers#get_caretakers' # TODO Add search params
    end


  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
