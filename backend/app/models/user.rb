class User < ApplicationRecord
    validates :name, presence: true
    validates :email, presence: true
    has_secure_password

    validates :email, uniqueness: true
    has_one :cart
end
