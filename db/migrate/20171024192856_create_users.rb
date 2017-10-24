class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :email
      t.string :location
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true

      t.timestamps
    end
    add_index :users, :username, :string
    add_index :users, :session_token, :string
  end
end
