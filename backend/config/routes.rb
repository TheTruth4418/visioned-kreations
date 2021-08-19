Rails.application.routes.draw do
  resources :cart_products
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
        post '/users/cart/add_shirt' => 'carts#add_product'
        post '/users/cart/add_cup' => 'carts#add_product'
      end
    end  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
