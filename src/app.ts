import express from 'express'
import bodyParser, { json } from 'body-parser'
import cors from 'cors'


import apiErrorHandler from './middlewares/apiErrorHandler'
// import apiContentType from './middlewares/apiContentType'

const app = express()
// Express configuration
// process.env.PORT || 3000
app.set('port', 3001)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


import ROUTER from "./router";
ROUTER(app);


// Custom API error handler
app.use(apiErrorHandler)

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the API',
  })
})

export default app
