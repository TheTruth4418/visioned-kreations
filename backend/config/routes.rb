Rails.application.routes.draw do
  resources :items
  resources :carts
  resources :products
  resources :users
    namespace :api do
      namespace :v1 do
        post '/signup' => 'users#create'
        post '/login' => 'auth#create'
        get '/user' => 'users#user'
      end
    end  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
