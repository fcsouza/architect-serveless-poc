const arc = require('@architect/functions')

exports.handler = arc.http.async(handler)

async function handler (req) {
  try {
    if (!req.body.userID)
      throw ReferenceError('missing userID')

    if (!req.body.name)
      throw ReferenceError('missing name')

    let data = await arc.tables()
    let user = await data.users.put(req.body)

    return {
      status: 201,
      json: user
    }
  }
  catch(e) {
    return {
      status: 500,
      json: {
        name: e.name,
        message: e.message,
        stack:e.stack
      }
    }
  }
}