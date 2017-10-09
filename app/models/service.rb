class Service < ApplicationRecord
  belongs_to :user
  mount_base64_uploader :picture, PictureUploader

end
