Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update] do
      resources :books, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :books, only: [:index, :show]
  end
end
