json.extract! user, :email, :id, :first_name, :image_url, :created_at
json.bookIds do
  json.array! user.books.map{|book| book.id}
end

# json.array! user.ratings.map{|rating| json.extract! :id, :book_id, :overall, :performance, :story}
#
# json.extract! user.reviews, :id, :title, :body, :created_at
