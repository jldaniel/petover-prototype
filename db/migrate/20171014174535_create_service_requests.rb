class CreateServiceRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :service_requests do |t|
      t.integer :requester_id
      t.integer :provider_id
      t.integer :service_id
      t.date :start_date
      t.date :end_date
      t.text :message
      t.string :request_state
      t.integer :pet_id

      t.timestamps
    end
  end
end
