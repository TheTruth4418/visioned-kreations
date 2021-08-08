Rails.application.routes.draw do
  resources :carts
  resources :products
  resources :users
  post '/signup' to 'users#create'
  post 'login' to 'auth#create'  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
