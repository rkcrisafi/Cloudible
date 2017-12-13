  json.extract! @book, :id, :title, :author, :narrator, :length, :unabridged, :language, :summary
  json.overallRating @book.overall_rating
  json.numOverallRatings @book.num_overall_ratings

  json.ratingIds do
    json.array! @book.ratings.map{|rating| rating.id}
  end

  # json.ratingIds @book.ratings do |rating|
  #   json.ratingId rating.id
  # end

  json.imageUrl asset_path(@book.image.url)
  json.audioUrl asset_path(@book.audio.url)
