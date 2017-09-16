class User < ApplicationRecord
  #include ActiveModel::Model
  has_many :pets
  has_many :services
  #attr_accessor :email, :password, ::pets, :services
end
