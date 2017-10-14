class Request < ApplicationRecord

##
#  Request Model
#   Model used for creating a request to consume a service between
#   a pet owner and a service provider

#  requester: integer - The ID for the pet owner requesting the service
#  provider: integer - The ID for the service provider
#  start: date - The requested time for the service to start
#  end: date - The requested time for the service to end
#  message: text - An accompanying message from the pet owner to the provider
#  state: string - The state of the request PENDING, ACCEPTED, DENIED, COMPLETED
#  pet: integer - The ID of the pet that the service is for

end
