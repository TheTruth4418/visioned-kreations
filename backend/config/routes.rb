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
        get '/items' => 'items#index'
        get '/items/:item_name' => 'items#show'
        post '/users/cart/add_shirt' => 'carts#add_shirt'
        post '/users/cart/add_cup' => 'carts#add_cup'
      end
    end  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
