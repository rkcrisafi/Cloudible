class Library < ApplicationRecord
  validates :user_id, :book_id, null: false
  validates :user_id, uniqueness: { scope: :book_id, message: "This book already exists in your library."}

  belongs_to :listener,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :book


end
