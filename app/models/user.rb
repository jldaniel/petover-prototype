class User < ApplicationRecord
  #include ActiveModel::Model
  has_many :pets
  has_many :services
  mount_base64_uploader :picture, PictureUploader
  #attr_accessor :email, :password, ::pets, :services
end
