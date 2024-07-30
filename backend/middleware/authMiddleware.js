const jwt = require('jsonwebtoken');

//authenticates user 
const authenticate = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).send('Please authenticate');
    }
};

module.exports = authenticate;
