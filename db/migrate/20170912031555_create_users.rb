class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password
      t.string :first_name
      t.string :last_name
      t.text :about_me
      t.string :img_url

      t.timestamps
    end

    create_table :pets do |t|
      t.belongs_to :user, index: true
      t.string :name
      t.text :about_me
      t.string :animal
      t.string :img_url

      t.timestamps
    end


    create_table :services do |t|
      t.belongs_to :user, index: true
      t.string :name
      t.text :about
      t.float :rate
      t.string :rate_type
      t.string :img_url
      t.float :rating

      t.timestamps
    end

  end
end
