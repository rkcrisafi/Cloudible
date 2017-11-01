Rails.application.routes.draw do
  get 'reviews/rails'

  get 'reviews/g'

  get 'reviews/controller'

  get 'reviews/Reviews'

  get 'reviews/create'

  get 'ratings/create'

  get 'ratings/update'

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update] do
      resources :books, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :books, only: [:index, :show]
  end
end
