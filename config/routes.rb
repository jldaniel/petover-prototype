Rails.application.routes.draw do
  scope '/betalogin' do
    get '/' => 'betalogin#login'
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
