class Product < ApplicationRecord
    validates :name, presence: true
    validates :color, presence: true
    validates :stock, presence: true

    belongs_to :item
end
