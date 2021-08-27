class Api::V1::OrdersController < ApplicationController

    def show(id=params[:id])
        order = Order.find_by_id(id)
        orderObj = {}
        products = order.order_products
        products.each do |x|
            item = Product.find_by_id(x.product_id)
            if orderObj[item.name]
                orderObj[item.name]["quantity"] += 1
            else
                orderObj[item.name] = {
                    "quantity" => 1,
                    "price" => item.price,
                    "id" => item.id,
                    "category" => item.item.category.name
                }
            end
            orderObj["id"]= order.id
        end
        render json: orderObj
    end

    def checkout 
        cart = current_user.cart.cart_products
        orderObj = {}
        order = Order.create(user_id: current_user.id)
        cart.each do |x|
            product = OrderProduct.create(product_id: x.product_id , order_id: order.id)
        end
        cart.destroy_all
        self.show(order.id)
    end

    def history
        render json: current_user.orders
    end
end
