class CreateRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :requests do |t|
      t.integer :requester
      t.integer :provider
      t.date :start
      t.date :end
      t.text :message
      t.string :state
      t.integer :pet

      t.timestamps
    end
  end
end
