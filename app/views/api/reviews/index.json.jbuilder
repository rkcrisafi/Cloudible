@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :title, :body, :id, :created_at
    json.extract! review.rating :rating_id, :overall, :story, :performance
    json.extract! review.reviewer :id, :first_name #location for later
    json.userName review.user.first_name
  end
end
