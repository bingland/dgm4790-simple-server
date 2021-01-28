const express = require('express')
const app = express()
const path = require('path')

const port = 5000

app.listen(port, () => { console.log(`Server running on port ${port}`) })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/example.html'))
})

app.get('/api', (req, res) => {
    const myObject = {
        someText: 'Random text',
        someBoolean: true,
        someArray: ['thing', 'another thing', 'wow, another thing!']
    }
    res.json(myObject)
})