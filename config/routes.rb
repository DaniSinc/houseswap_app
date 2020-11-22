Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get "/parking", to: "pages#parking"
  get "/alarms", to: "pages#alarms"
  get "/kitchen", to: "pages#kitchen"
  get "/doors", to: "pages#doors"
  get "/bathrooms", to: "pages#bathrooms"
  get "/rubbish", to: "pages#rubbish"
  get "/shed", to: "pages#shed"
  get "/living_room", to: "pages#living_room"
  get "/controls", to: "pages#controls"
end
