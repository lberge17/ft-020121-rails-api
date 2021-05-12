Rails.application.routes.draw do
  # resources :products
  namespace :api do
    namespace :v1 do
      resources :stores, only: [:index]
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
