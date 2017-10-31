class AddAttachmentAudioToBooks < ActiveRecord::Migration[5.1]
  def self.up
    change_table :books do |t|
      t.attachment :audio
    end
  end

  def self.down
    remove_attachment :books, :audio
  end
end
