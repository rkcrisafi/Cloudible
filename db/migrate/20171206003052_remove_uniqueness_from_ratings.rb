class RemoveUniquenessFromRatings < ActiveRecord::Migration[5.1]
  def change
    remove_index :ratings, [:user_id, :book_id]
  end
end
