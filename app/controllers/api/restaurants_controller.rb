class Api::RestaurantsController < ApplicationController
  def show
   render json: Restaurant.first
  end
end
