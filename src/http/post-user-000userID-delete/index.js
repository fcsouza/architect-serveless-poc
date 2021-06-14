let arc = require('@architect/functions')

exports.handler = arc.http.async(destroy)

async function destroy (req) {
  let data = await arc.tables()
  await data.user.delete({userID: req.params.userID})
  return {
    location: '/'
  }
}