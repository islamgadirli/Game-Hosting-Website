var jwt = require("jsonwebtoken");

var auth = function (req, res, next) {
    var token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).send("You don't have an authorization!");
    }
    try {
        var decodedToken = jwt.verify(token, "jwtPrivateKey");
        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(401).send("Wrong token!");
    }
};

module.exports = auth;
