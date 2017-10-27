json.book do
  json.extract! @book, :title, :author, :narrator, :length, :unabridged, :language, :summary
  # json.image_url @book.image.url
  json.image_url asset_path(@book.image.url)
end
