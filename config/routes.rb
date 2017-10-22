Rails.application.routes.draw do
  resources :users

  scope '/betalogin' do
    get '/' => 'betalogin#login'
  end

  scope '/api' do
    scope '/login' do
      get '/' => 'users#login'
    end

    scope '/users' do
      get '/' => 'users#index'
      get '/:id' => 'users#show'
      post '/' => 'users#create'
      put '/:id' => 'users#update'
      delete '/' => 'users#destroy'

      scope '/:user_id/pets' do
        get '/' => 'users#index_pet'
        get '/:id' => 'users#show_pet'
        post '/' => 'users#add_pet'
        put '/:id' => 'users#update_pet'
      end

      scope '/:user_id/services' do
        get '/' => 'users#index_service'
        get '/:id' => 'users#show_service'
        post '/' => 'users#add_service'
        put '/:id' => 'users#update_service'
      end

    end


    scope '/pets' do
      get '/' => 'pets#index'
      get '/:id' => 'pets#show'
      post '/' => 'pets#create'
      put '/' => 'pets#update'
      delete '/' => 'pets#destroy'
    end

    scope '/services' do
      get '/' => 'services#index'
      get '/:id' => 'services#show'
      post '/' => 'services#create'
      put '/' => 'services#update'
      delete '/' => 'services#destroy'
    end

    scope '/servicerequests' do
      get '/' => 'service_requests#index'
      get '/:id' => 'service_requests#show'
      post '/' => 'service_requests#create'
      put '/:id' => 'service_requests#update'
      delete '/:id' => 'service_requests#destroy'
    end

  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
