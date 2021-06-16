@app
architect-serveless-poc

@http
post /user
get /user
post /user/:userID
post /user/:userID/delete


@queues
basic-queue

@tables
user
  userID *String

@indexes
user
  date *String

# @aws
# profile default
# region us-west-1
  