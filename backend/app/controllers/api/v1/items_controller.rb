class Api::V1::ItemsController < ApplicationController
    skip_before_action :authorized
    def index 
        items = Item.all 
        render json: items
    end
end
