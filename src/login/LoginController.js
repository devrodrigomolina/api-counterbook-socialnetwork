const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Login = require("./Login");
const User = require("../register/Register");

router.post("/login", async (req, res) => {
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
            res.send({ message: "Logado com sucesso!" });
        } else {
            res.send({ message: "Senha inválida" });
        }
    } catch (error) {
        res.send({ message: `Ocorreu um erro: ${error}` })
    }
});

module.exports = router;
