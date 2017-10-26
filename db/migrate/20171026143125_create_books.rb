class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :image_url
      t.string :author
      t.string :narrator
      t.string :publisher
      t.string :audio
      t.string :length
      t.string :unabridged
      t.string :language
      t.string :summary

      t.timestamps
    end
  end
end
