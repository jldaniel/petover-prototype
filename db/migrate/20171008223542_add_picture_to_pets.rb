class AddPictureToPets < ActiveRecord::Migration[5.1]
  def change
    add_column :pets, :picture, :string
  end
end
