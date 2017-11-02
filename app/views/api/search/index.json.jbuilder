# formattedResults = {
#   "Book" => [],
# }
#
#
# @results.each do |result|
#   formattedResults[result.searchable_type] << result.searchable
# end
#
# json.extract!(formattedResults, "Book")


ids = @results.map{|result| result.searchable.id}

json.Book Book.find(ids) do |book|
  json.extract! book, :id, :title, :author, :narrator, :length, :unabridged, :language, :summary
  json.overallRating book.overall_rating
  json.imageUrl asset_path(book.image.url)
  json.audioUrl asset_path(book.audio.url)
end
