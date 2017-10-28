class RemoveColumnsFromBooks < ActiveRecord::Migration[5.1]
  def change
    remove_column :books, :publisher
  end
end
