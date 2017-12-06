if @user_library
  ratings = current_user.ratings
end

@books.each do |book|
  json.set! book.id do
    json.extract! book, :id, :title, :author, :narrator, :length, :unabridged, :summary
    json.imageUrl asset_path(book.image.url)
    json.audioUrl asset_path(book.audio.url)

    if @user_library
      rating = ratings.find { |rating| rating.book_id == book.id }
      if rating
        json.extract! rating, :overall, :performance, :story, :book_id
        json.ratingId rating.id
      end

    end

    json.overallRating book, :overall_rating
    json.storyRating book, :story_rating
    json.performanceRating book, :performance_rating

    json.numOverallRatings book, :num_overall_ratings
    json.numStoryRatings book, :num_story_ratings
    json.numPerformanceRatings book, :num_performance_ratings


  end
end
