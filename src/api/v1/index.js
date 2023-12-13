const express = require('express')
const colors = require('colors')
const BootcampRouter = require('./routes/bootcamps')

const PORT = process.env.PORT || 3000
const app = express()

app.use('/api/v1/bootcamps', BootcampRouter)

app.listen(PORT, () => {
    console.log(`The server is running and listening on port: ${colors.yellow.underline(PORT)}`)
})