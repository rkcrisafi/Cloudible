class CreateLibraries < ActiveRecord::Migration[5.1]
  def change
    create_table :libraries do |t|
      t.integer :book_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :libraries, [:book_id, :user_id], unique: true
  end
end
