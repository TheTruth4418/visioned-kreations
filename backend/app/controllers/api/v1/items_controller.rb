class Api::V1::ItemsController < ApplicationController
    skip_before_action :authorized
    def index 
        cats = Category.all
        render json: cats.to_json( :include => {
            :items => {:except => [:created_at, :updated_at]}
        },:only => [:name] )
    end

    def show
        item = Item.find_by(name: params[:item_name])
        render json: item.to_json( :include => {
            :products => {:except => [:created_at, :updated_at]},
            :category => {:only => [:name]}
        },:except => [:created_at, :updated_at] )
    end
end
