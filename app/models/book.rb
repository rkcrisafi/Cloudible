class Book < ApplicationRecord

  validates :title, :author, :narrator, :length, :language, :summary, presence: true
  validates :unabridged, inclusion: { in: [true, false] }

  has_attached_file :image, default_url: "love-books.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :libraries

  has_many :listeners,
    through: :libraries,
    source: :listener

end
