class CreatePetowners < ActiveRecord::Migration[5.1]
  def change
    create_table :petowners do |t|
      t.string :firstname
      t.string :lastname
      t.string :password
      t.string :email
      t.string :profile

      t.timestamps
    end
  end
end
