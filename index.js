const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/connection');
const cors = require('cors');

const postsController = require('./src/posts/PostsController');
const reactionsController = require('./src/reactions/ReactionsController');
const registerController = require('./src/register/RegisterController');
const loginController = require('./src/login/LoginController');

app.use(express.static('public'));
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
app.use('/register', registerController);
app.use('/', loginController);


app.listen(8989, () => {
    console.log('Servidor está rodando!')
})