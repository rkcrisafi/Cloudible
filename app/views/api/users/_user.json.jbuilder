json.extract! user, :email, :id, :first_name, :created_at, :location
json.bookIds do
  json.array! user.books.map{|book| book.id}
end

json.ratingIds do
  json.array! user.ratings.map{|rating| rating.id}
end

json.reviewIds do
  json.array! user.reviews.map{|review| review.id}
end

json.imageUrl asset_path(user.image.url)

# json.array! user.ratings.map{|rating| json.extract! :id, :book_id, :overall, :performance, :story}
#
# json.extract! user.reviews, :id, :title, :body, :created_at
