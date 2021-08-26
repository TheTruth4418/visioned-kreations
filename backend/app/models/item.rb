class Item < ApplicationRecord
    has_many :products
    validates :category, presence: true
    belongs_to :category
end
