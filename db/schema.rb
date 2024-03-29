# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171019004142) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pets", force: :cascade do |t|
    t.bigint "user_id"
    t.string "name"
    t.text "about_me"
    t.string "animal"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "picture"
    t.index ["user_id"], name: "index_pets_on_user_id"
  end

  create_table "service_requests", force: :cascade do |t|
    t.integer "requester_id"
    t.integer "provider_id"
    t.integer "service_id"
    t.date "start_date"
    t.date "end_date"
    t.text "message"
    t.string "request_state"
    t.integer "pet_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "services", force: :cascade do |t|
    t.bigint "user_id"
    t.string "name"
    t.text "about"
    t.float "rate"
    t.string "rate_type"
    t.string "img_url"
    t.float "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "picture"
    t.float "lat"
    t.float "lng"
    t.index ["user_id"], name: "index_services_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password"
    t.string "first_name"
    t.string "last_name"
    t.text "about_me"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "picture"
  end

end
