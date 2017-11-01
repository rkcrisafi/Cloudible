class AddIndexToRatingInReviews < ActiveRecord::Migration[5.1]
  def change
    add_index :reviews, :rating_id, unique: true
  end
end
