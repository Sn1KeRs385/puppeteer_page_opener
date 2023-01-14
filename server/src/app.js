import express from 'express'
import { launchBrowser } from './utils/puppeteer.js'
import withTimings from './middlewares/with-timings.js'
import errorHandler from './middlewares/error-handler.js'
import routes from './routes/index.js'
import NotFoundError from './errors/not-found-error.js'

await launchBrowser()

const port = 3000
const app = express()

app.use(withTimings)

routes.forEach(route => {
  app[route.method](route.path, async (req, res, next) => {
    try {
      await route.action(req, res)
    } catch (error) {
      next(error)
    }
  })
})

app.use(function (req, res, next) {
  throw new NotFoundError()
})

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
