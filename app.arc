@app
architect-serveless-poc

@http
get /

@views
get /

@queues
basic-queue

@static
fingerprint true
ignore
  .tar.gz
  tmp
  user

@tables
user
  userId *String
  stream true

# @aws
# profile default
# region us-west-1
  