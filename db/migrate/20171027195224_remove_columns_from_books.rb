class RemoveColumnsFromBooks < ActiveRecord::Migration[5.1]
  def change
    remove_columns :books, :publisher
  end
end
