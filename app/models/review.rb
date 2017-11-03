class Review < ApplicationRecord
  validates :title, :body, :rating_id, presence: true
  validates :rating_id, uniqueness: true

  belongs_to :rating

  has_one :reviewer,
    through: :rating,
    source: :rater

  has_one :book,
    through: :rating,
    source: :book


end
