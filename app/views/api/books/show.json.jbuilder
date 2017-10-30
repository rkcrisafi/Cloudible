
  json.extract! @book, :id, :title, :author, :narrator, :length, :unabridged, :language, :summary
  # json.image_url @book.image.url
  json.image_url asset_path(@book.image.url)
