class Api::V1::CartsController < ApplicationController
    def add_product
        product = Product.find_by_id(params[:obj][:id])
        cart = current_user.cart
        CartProduct.create(cart_id: cart.id, product_id: product.id)
        render json: {status: "success"}
    end
end
