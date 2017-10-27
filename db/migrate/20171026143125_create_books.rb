class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.string :narrator, null: false
      t.integer :length, null: false
      t.boolean :unabridged, null: false
      t.string :language, null: false
      t.text :summary, null: false

      t.timestamps
    end
  end
end
