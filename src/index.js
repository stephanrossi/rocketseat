import express from 'express'

const app = express()

app.use((req, res) => {
    res.status(404).json({
        error: true,
        msg: "Endpoint não encontrado.",
    })
})

app.listen(3000, () => { console.log('Server running'); })