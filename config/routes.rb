Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show] do
      resources :books, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :books, only: [:index, :show] do
      resources :ratings, only: [:create, :update] do
        resources :reviews, only: [:create, :index]
      end
    end
  end

  namespace :api do
    get '/search/:query', to: 'search#index'
  end

end
