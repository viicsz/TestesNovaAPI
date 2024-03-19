const express = require("express")
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
const port = 3000


const credenciais = require('./credenciais_mongodb'); 
//Observação 1 no README



const DatabasePKM = mongoose.model('DatabasePKM', { 
    nome: String,
    totalpkm: Number,
    imagem_treinador: String,
    lista_pokemons: String,
});

//GET
app.get ("/", async (req, res) => {
    const ListDatabasePKM = await DatabasePKM.find()
    return res.send(ListDatabasePKM)
})

//DELETE
app.delete("/:id", async(req, res) => {
    const databasePKM = await DatabasePKM.findByIdAndDelete(req.params.id)
    return res.send(databasePKM)
})

//UPDATE, PUT
app.put("/:id", async(req, res) => {
    const databasePKM = await DatabasePKM.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        totalpkm: req.body.totalpkm,
        imagem_treinador: req.body.imagem_treinador,
        lista_pokemons: req.body.lista_pokemons,
    }, {
        new: true
    })
    return res.send(databasePKM)
})

//POST
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
    mongoose.connect(credenciais);
    console.log('App runing')
})