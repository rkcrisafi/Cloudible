@books.each do |book|
  json.set! book.id do
    json.extract! book, :id, :title, :author, :narrator, :length, :unabridged, :summary
    json.imageUrl asset_path(book.image.url)
    json.audioUrl asset_path(book.audio.url)

    json.overallRating book, :overall_rating
    json.storyRating book, :story_rating
    json.performanceRating book, :performance_rating

    # json.numOverallRatings book, :num_overall_ratings
    # json.numStoryRatings book, :num_story_ratings
    # json.numPerformanceRatings book, :num_performance_ratings


  end
end
