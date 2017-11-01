class CreateRatings < ActiveRecord::Migration[5.1]
  def change
    create_table :ratings do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.integer :overall
      t.integer :performance
      t.integer :story

      t.timestamps
    end
    add_index :ratings, [:user_id, :book_id], unique: true
  end
end
