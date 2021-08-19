class Api::V1::CartsController < ApplicationController
    def add_product
        product = Product.find_by_id(params[:obj][:id])
        cart = current_user.cart
        CartProduct.create(cart_id: cart.id, product_id: product.id)
        render json: cart.cart_products
    end

    def show
        cart = current_user.cart.cart_products
        cartObj = {}
        cart.each do |x|
            item = Product.find_by_id(x.product_id)
            if cartObj[item.name]
                cartObj[item.name]["quantity"] += 1
            else
                cartObj[item.name] = {
                    "quantity" => 1,
                    "price" => item.price
                }
            end
        end
        render json: cartObj
    end
end


