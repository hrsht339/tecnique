const jwt = require("jsonwebtoken")

const authentication = (req, res, next) => {
    let token = req.headers.authorization
    if (token) {
        let decoded = jwt.verify(token, "harshit")
        if (decoded) {
            next()
        }
        else {
            res.send({
                "msg": "login again"
            })
            
        }
    }
    else {
        res.send({
            "msg": "please provide token"
        })
    }
}

module.exports = {
    authentication
}