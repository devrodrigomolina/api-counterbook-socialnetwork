const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Login = require("./Login");
const User = require("../register/Register");
const { createToken } = require('../middleware/jwtToken');

router.post("/new", async (req, res) => {
    const { user, password } = req.body;
    try {
        const userExsting = await User.findOne({
            where: {
                username: user,
            },
        });
        
        if(!userExsting) {
            return res.send({ message: "Usuário não encontrado" });
        }

        const isPasswordValid = await bcrypt.compare(password, userExsting.password);

        if (isPasswordValid) {
            const token = createToken({ id: userExsting.id, username: userExsting.username  })
            res.send({ message: "Logado com sucesso!", token });
        } else {
            res.send({ message: "Senha inválida" });
        }
    } catch (error) {
        res.send({ message: `Ocorreu um erro: ${error}` })
    }
});

module.exports = router;
