const express = require('express');
const router = express.Router();
const User = require('./Register');
const cryptPassword = require('../../helpers/passwordCrypt/password');

router.post('/user/new', async (req, res) => {
    const { username, email, password, nome, genero, foto_de_perfil, data_de_nascimento, biografia } = req.body;
    const hashedPassword = await cryptPassword(password);

    const userExsting = await User.findOne({
        where: {
            email: email
        }
    })

    if(!userExsting) {
        User.create({
            username,
            email,
            password: hashedPassword,
            nome,
            genero,
            foto_de_perfil,
            data_de_nascimento,
            biografia
        }).then(() => {
            res.send({ message: "Usuário adicionado com sucesso!"})
        }).catch(error => res.send({ message: `Ocorreu um erro: ${error}` }))
    } else {
        res.send({ message: "Este email já possúi cadastro!"})
    }
})

module.exports = router;
