import { app, PORT } from './server.js'

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})