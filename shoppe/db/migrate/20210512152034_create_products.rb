class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.decimal :price
      t.belongs_to :store, null: false, foreign_key: true
      t.integer :stock

      t.timestamps
    end
  end
end
