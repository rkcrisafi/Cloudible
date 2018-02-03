ratings = []

@reviews.each do |review|
  user = review.reviewer
  ratings << review.rating
  json.set! review.id do
    json.extract! review, :title, :body, :id, :created_at, :rating_id
    # json.extract! review.rating :rating_id, :overall, :story, :performance, :book_id
    json.extract! user, :id, :first_name
    json.userImageUrl asset_path(user.image.url)
    # json.userName review.user.first_name
  end
end

ratings.each do |rating|
  json.set! rating.id do
    json.extract! rating, :rating_id, :overall, :story, :performance, :book_id
  end
end
