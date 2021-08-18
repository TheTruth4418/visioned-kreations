class Api::V1::ItemsController < ApplicationController
    skip_before_action :authorized
    def index 
        items = Item.all 
        render json: items
    end

    def show
        item = Item.find_by(name: params[:item_name])
        render json: item.to_json( :include => {
            :products => {:except => [:created_at, :updated_at]}
        },:except => [:created_at, :updated_at] )
    end
end
