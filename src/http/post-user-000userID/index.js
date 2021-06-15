let arc = require('@architect/functions')

exports.handler = arc.http.async(update)

async function update (req) {

  let data = await arc.tables()

  await data.user.update({
    Key: {
      userID: req.params.userID
    },
    UpdateExpression: 'set #name = :name',
    ExpressionAttributeNames: {
      '#name': 'name'
    },
    ExpressionAttributeValues: {
      ':name': req.body.name
    }
  })

  return {
    location: '/'
  }
}