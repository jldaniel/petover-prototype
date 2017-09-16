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
        get '/' => 'user#index_pet'
        get '/:id' => 'user#show_pet'
      end

      scope '/:user_id/services' do
        get '/' => 'user#index_service'
        get '/:id' => 'user#show_service'
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

  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
