const express = require('express');
const router = express.Router();
const Posts = require('./Posts');
const slugify = require('slugify');

router.post('/posts/new', (req, res) => {
    const statusText = req.body.status;

    if (statusText != undefined) {
        Posts.create({
            status: statusText,
            slug: slugify(statusText)
        }).then(() => {
            res.status(201).json({ message: 'Post criado com sucesso' });
        }).catch(error => {
            console.log('error', error)
            res.status(500).json({ message: `Erro: ${error}` });
        })
    }
})

router.get('/posts', (req, res) => {
    Posts.findAll({ raw: true, order: [['id', 'DESC']] }).then(status => {
        res.send({ status })
    })
})

module.exports = router;