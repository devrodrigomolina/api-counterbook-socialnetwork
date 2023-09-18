const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');

function createToken(payload) {
    console.log('payload', payload)
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: 'Token de autenticação ausente' });
    }
    
    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next()
    } catch (error) {
        return res.status(403).json({ message: 'Token inválido' });
    }
}

module.exports = { createToken, verifyToken };
