class Library < ApplicationRecord
  validates :user_id, :book_id, null: false
  valdates :user_id, uniqueness: { scope: :book_id }

  belongs_to :listener,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :book

end
