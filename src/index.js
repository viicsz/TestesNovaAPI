const express = require("express")
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
const port = 3000


const credenciais = require('./credenciais_mongodb'); 
//Observação 1 no README


mongoose.connect(credenciais);
const DatabasePKM = mongoose.model('DatabasePKM', { 
    nome: String,
    totalpkm: Number,
    imagem_treinador: String,
    lista_pokemons: String,
});


app.get ("/", (req, res) => {
    res.send("Olá, teste")
})

app.post("/", async (req, res) => {
    const databasePKM = new DatabasePKM({
        nome: req.body.nome,
        totalpkm: req.body.totalpkm,
        imagem_treinador: req.body.imagem_treinador,
        lista_pokemons: req.body.lista_pokemons,

    })

    await databasePKM.save()
    res.send(databasePKM)
})

app.listen(port, () => {
    console.log('App runing')
})