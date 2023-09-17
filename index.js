const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/connection');
const cors = require('cors');

const postsController = require('./src/posts/PostsController');
const reactionsController = require('./src/reactions/ReactionsController');

const Article = require('./src/users/User');
const Posts = require('./src/posts/Posts');

app.set(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:8080'
}));

connection
    .authenticate()
        .then(() => {
            console.log('Conectado ao banco de dados')
        }).catch(error => {
            console.log(error)
        })

app.use('/', postsController);
app.use('/', reactionsController);

app.listen(8989, () => {
    console.log('Servidor está rodando!')
})