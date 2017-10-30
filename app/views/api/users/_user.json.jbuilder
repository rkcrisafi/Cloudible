json.extract! user, :email, :id, :first_name
json.bookIds do
  json.array! user.books.map{|video| video.id}
end
