class Book < ApplicationRecord
  include PgSearch
  multisearchable against: %i(title author)

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

  has_many :ratings

  has_many :reviews,
    through: :ratings,
    source: :review

  def overall_rating
    self.ratings.average(:overall).to_f.round(1)
  end

  def num_overall_ratings
    self.ratings.count(:overall).to_i
  end

  def num_story_ratings
    self.ratings.count(:story).to_i
  end

  def num_performance_ratings
    self.ratings.count(:performance).to_i
  end

  def story_rating
    self.ratings.average(:story).to_f.round(1)
  end

  def performance_rating
    self.ratings.average(:performance).to_f.round(1)
  end

end
