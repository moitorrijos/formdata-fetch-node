const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Server is running')
})

app.post('/', (req, res) => {
  console.log(req)
  res.status(200).json({
    success: true,
    message: 'Request received'
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})