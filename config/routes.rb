Rails.application.routes.draw do
  get "/articles", to: "articles#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "tests#index"
  namespace :api, :path => "",:defaults => {:format => :json} do
    namespace :v1 do
      resource :greetings
    end
  end
end
