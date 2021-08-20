class CreateOrderProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :order_products do |t|
      t.integer :cart_id
      t.integer :product_id

      t.timestamps
    end
  end
end
