class CreatePets < ActiveRecord::Migration[5.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :type
      t.string :profile

      t.timestamps
    end
  end
end
