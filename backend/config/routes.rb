Rails.application.routes.draw do
    namespace :api do
      namespace :v1 do
        post '/signup' => 'users#create'
        post '/login' => 'auth#create'
        get '/user' => 'users#user'
        get '/items' => 'items#index'
        get '/items/:item_name' => 'items#show'
        get '/users/cart' => 'carts#show'
        post '/users/cart/add_shirt' => 'carts#add_product'
        post '/users/cart/add_cup' => 'carts#add_product'
        post '/users/cart/remove_item' => 'carts#remove_item'
        post '/users/cart/clear' => 'carts#clear'
      end
    end  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
