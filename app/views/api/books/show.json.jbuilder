
  json.extract! @book, :id, :title, :author, :narrator, :length, :unabridged, :language, :summary
  json.overallRating @book.overall_rating
  json.numOverallRatings @book, :num_overall_ratings

  json.imageUrl asset_path(@book.image.url)
  json.audioUrl asset_path(@book.audio.url)
