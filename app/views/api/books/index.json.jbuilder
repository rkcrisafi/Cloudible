@books.each do |book|
  json.set! book.id do
    json.extract! book, :title, :author, :narrator, :length, :unabridged, :summary
    json.imageUrl asset_path(book.image.url)
  end
end
