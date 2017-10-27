json.book do
  json.extract! @book, :title, :author, :narrator, :publisher, :length, :unabridged, :language, :summary
  # json.image_url @book.image.url
end
