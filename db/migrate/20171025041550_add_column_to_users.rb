class AddColumnToUsers < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :email, unique: true
    remove_column :users, :username, :string
    add_column :users, :first_name, :string
  end
end
