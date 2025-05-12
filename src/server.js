const express = require('express')
const app = express()

// Declare a basic root route for confirming the server works
app.get('/', (request, response) => {
    response.json({
        message: 'Hello, world!'
    })
})

let PORT = process.env.PORT

// Export the configured server to the index.js and test files to control
module.exports = {
    app: app,
    PORT: PORT
}