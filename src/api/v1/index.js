const express = require('express')

const PORT = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
    res.send({msg: 'Welcome to DevCamper API'})
})
app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`)
})