class DeleteColumnFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :email, :string
    add_column :users, :email, :string, unique: true
  end
end
