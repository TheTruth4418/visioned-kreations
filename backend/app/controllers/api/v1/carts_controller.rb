class Api::V1::CartsController < ApplicationController
    def add_shirt
        product = Product.find_by_id(params[:obj][:id])
        cart = current_user.cart
        cart.products << product
        render json: cart
    end

    def add_cup
        render json: params
    end
end
