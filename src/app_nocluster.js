import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send({ status: 'success', message: `Petición atendida por el worker ${process.pid}`})
})

app.get('/simple', (req, res) => {
    let sum = 0
    for (let index = 0; index < 10000; index++) {
        sum += index
    }
    res.send({ sum, status: 'success', message: `Petición atendida por el worker ${process.pid}`})
})

app.get('/complex', (req, res) => {
    let sum = 0
    for (let index = 0; index < (5e8 * 4); index++) {
        sum += index
    }
    res.send({ sum, status: 'success', message: `Petición atendida por el worker ${process.pid}`})
})

app.listen(8080, () => console.log('Server Up'))