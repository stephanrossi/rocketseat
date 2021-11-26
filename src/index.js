import express, { response } from 'express'
import { v4 as uuidv4 } from 'uuid'

const app = express()

const customers = []

app.use(express.json())


app.post('/account', (req, res) => {
    const { cpf, name } = req.body

    const customerAlreadyExists = customers.some(
        (customer) => customer.cpf === cpf)

    if (customerAlreadyExists) {
        res.status(400).json({
            error: "Customer already exists"
        })
    }
    customers.push({
        cpf, name, id: uuidv4(), statement: []
    })

    res.status(201).send()
})

app.use((req, res) => {
    res.status(404).json({
        error: true,
        msg: "Endpoint não encontrado.",
    })
})

app.listen(3000, () => { console.log('Server running'); })