class CreateCartProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_products do |t|
      t.string :cart_id
      t.string :product_id

      t.timestamps
    end
  end
end
