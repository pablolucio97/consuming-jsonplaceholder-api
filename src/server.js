const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async (req, res) => {

    const {data} = await axios('https://jsonplaceholder.typicode.com/users')
    console.log(data)
    console.log(req.query.id)
    return res.json(data)
})

app.listen('3335', () => {
    console.log('Server running at 3335')
})