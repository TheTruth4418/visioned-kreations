class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :cart_id

      t.timestamps
    end
  end
end
