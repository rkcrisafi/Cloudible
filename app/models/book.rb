class Book < ApplicationRecord

  validates :title, :author, :narrator, :length, :language, :summary, presence: true
  validates :unabridged, inclusion: { in: [true, false] }

  has_attached_file :image, default_url: "book-launch.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_attached_file :audio, default_url: "http://s3.us-east-2.amazonaws.com/cloudible-dev/audio/ladysusan_1_austen_64kb.mp3"
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\Z/

  has_many :libraries

  has_many :listeners,
    through: :libraries,
    source: :listener

end
