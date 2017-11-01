class Rating < ApplicationRecord
  validates :user_id, :book_id, presence: true
  validates :user_id, uniqueness: { scope: :book_id}
  validates :overall, :story, :performance, inclusion: { in: [1,2,3,4,5] }


  belongs_to :rater,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :book

  has_one :review


end
