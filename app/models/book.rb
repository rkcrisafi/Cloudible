class Book < ApplicationRecord

  validates :title, :image, :author, :narrator, :publisher, :length, :unabridged, :language, :summary, presence: true


  has_attached_file :image, default_url: "love-books.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :libraries

  has_many :listeners,
    through: :libraries,
    source: :listener

end
