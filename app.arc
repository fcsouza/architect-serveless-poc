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

# @aws
# profile default
# region us-west-1
  