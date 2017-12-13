class Api::MenuItemsController < ApplicationController
  before_action :set_restaurant 
  before_action :set_item, except: [:index, :create]

  def index
    render json: @restaurant.menu_items.all
  end

  def show
    render json: @item
  end

  def create
    @item = @restaurant.menu_items.new(item_params)

    if @item.save
      render json: @item, status: :created
    else 
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  def update
    if @item.update(item_params)      
      render json: @item
    else 
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @item.destroy
  end

  private
  def set_item
    @item = @restaurant.menu_items.find(params[:id])
    end 

  def item_params 
    params.require(:item).permit(:name, :description, :price)
  end 

  def set_restaurant
    @restaurant = Restaurant.first
  end
end
