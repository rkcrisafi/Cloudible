@books.each do |book|
  json.set! book.id do
    json.extract! book, :title
  end
end
