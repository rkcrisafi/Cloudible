@books.each do |book|
  json.set! book.id do
    json.extract! book, :title, :author, :narrator, :length, :unabridged, :summary, :image
  end
end
