class RemoveAttributeFromBooks < ActiveRecord::Migration[5.1]
  def change
    remove_column :books, :length
    add_column :books, :length, :string
  end
end
