class CreateCaretakers < ActiveRecord::Migration[5.1]
  def change
    create_table :caretakers do |t|
      t.string :firstname
      t.string :lastname
      t.string :profile
      t.text :biography

      t.timestamps
    end
  end
end
