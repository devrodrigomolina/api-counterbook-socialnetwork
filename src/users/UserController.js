const express = require('express');
const router = express.Router();
const User = require('./User');

router.post('/users/new', (req, res) => {
    const { username, email, password, nome, genero, foto_de_perfil, data_de_nascimento, biografia } = req.body;
    User.create({
        username,
        email,
        password,
        nome,
        genero,
        foto_de_perfil,
        data_de_nascimento,
        biografia
    }).then(() => {
        res.send({ message: "Usuário adicionado com sucesso!"})
    }).catch(error => res.send({ message: `Ocorreu um erro: ${error}` }))
})

module.exports = router;
