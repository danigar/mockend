const Koa = require('koa')
const app = new Koa()

function greet () {
  return 'Hello!'
}

// response
app.use(ctx => {
  ctx.body = greet()
})

// init server on port 3000
app.listen(3000)

module.exports = greet
