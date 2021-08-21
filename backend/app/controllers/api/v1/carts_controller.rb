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
                    "price" => item.price,
                    "id" => item.id
                }
            end
        end
        render json: cartObj
    end

    def clear 
        cart = current_user.cart.cart_products
        cart.destroy_all
        render json: {status: "Success"}
    end

    def checkout 
        cart = current_user.cart.cart_products
        orderObj = {}
        order = Order.create(user_id: current_user.id)
        cart.each do |x|
            product = OrderProduct.create(product_id: x.id , order_id: order.id)
            item = item = Product.find_by_id(x.product_id)
            orderObj[item.name] = {
                    "quantity" => 1,
                    "price" => item.price,
                    "id" => item.id
            }
        end
        cart.destroy_all
        render json: orderObj

    end

    def remove_item
        item = Product.find_by_id(params[:obj][:id])
        cart = current_user.cart
        product = CartProduct.find_by(product_id: item.id,cart_id: cart.id)
        product.destroy
        self.show
    end
end


