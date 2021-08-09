class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :category
      t.string :color
      t.integer :stock
      t.decimal :price
      t.integer :item_id

      t.timestamps
    end
  end
end
