ratings = []
books = []


json.reviews do
  @reviews.each do |review|
    user = review.reviewer
    ratings << review.rating
    books << review.book
    json.set! review.id do
      json.extract! review, :title, :body, :id, :created_at, :rating_id
      # json.extract! review.rating :rating_id, :overall, :story, :performance, :book_id
      json.extract! user, :first_name
      json.userId user.id
      json.userImageUrl asset_path(user.image.url)
    end
  end
end

json.ratings do
  ratings.each do |rating|
    json.set! rating.id do
      json.extract! rating, :id, :overall, :story, :performance, :book_id
    end
  end
end

# json.books do
#   books.each do |book|
#     json.set! book.id do
#       json.extract! book, :id, :title, :narrator, :author, :unabridged
#     end
#   end
# end
