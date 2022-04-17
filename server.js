const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const path = require('path')

app.use('/styles', express.static(path.join(__dirname, 'styles')))
app.use('/scripts', express.static(path.join(__dirname, 'scripts')))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.status(200).json({
    success: true,
    message: 'Request received'
  })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
