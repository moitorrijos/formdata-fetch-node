const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use('/styles', express.static(path.join(__dirname, 'styles')))
app.use('/scripts', express.static(path.join(__dirname, 'scripts')))
app.use(express.json())
app.get('/', (req, res) => {
  console.log(req.body)
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Request received',
    data: req.body
  })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
