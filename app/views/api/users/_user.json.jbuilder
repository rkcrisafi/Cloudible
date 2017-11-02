json.extract! user, :email, :id, :first_name
json.bookIds do
  json.array! user.books.map{|video| video.id}
end

# json.array! user.ratings.map{|rating| json.extract! :id, :book_id, :overall, :performance, :story}
#
# json.extract! user.reviews, :id, :title, :body, :created_at
