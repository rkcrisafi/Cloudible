
  json.extract! @book, :id, :title, :author, :narrator, :length, :unabridged, :language, :summary
  # json.image_url @book.image.url
  json.imageUrl asset_path(@book.image.url)
  json.audioUrl asset_path(@book.audio.url)
