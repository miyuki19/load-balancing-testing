const app = require('./src/app')

const {
  app: { port },
} = require('./src/configs/config.app')
const PORT = port || 3005

const server = app.listen(PORT, () => {
  console.log(`Load Balancing Testing service start with ${PORT}`)
})
