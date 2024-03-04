const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Gabriela Santos', 
        imagem: 'https://media.licdn.com/dms/image/D4D03AQF05bLcfNe2vg/profile-displayphoto-shrink_200_200/0/1703958243515?e=1715212800&v=beta&t=-3Av1yO7B1zsHuuZEkBoHDZbRhEbnHYSd4UFPY-vgro',
        minibio: 'Estudante'
    }, 
    {
        nome: 'Iana Chan',
        imagem: '',
        minibio: 'Fudadora da ProgaMaria'
    },
    {
        nome: 'Nina da hora',
        imagem: '',
        minibio: 'hacker antiracista'
    }

]

function mostraMulheres(request, response) {
    response.json(mulheres) 
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)