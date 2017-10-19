class AddCoordinatesToServices < ActiveRecord::Migration[5.1]
  def change
    add_column :services, :lat, :float
    add_column :services, :lng, :float
  end
end
