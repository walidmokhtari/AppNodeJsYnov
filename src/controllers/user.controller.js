const User = require('../models/user.model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwrbtoken");
const configs = require("../configs");

exports.register = (req, res) => {
    console.log(req.body);
    let hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        isAdmin: req.body.isAdmin
    });

    user.save()
        .then((data) => {
            res.send({
                user: data,
                isCreated: true
            })
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured"
            })
        })
}

exports.login = (req, res) => {
    //Chercher l'utilisateur par son email
    //Si il existe, 

    let userToken = jwt.sing({
            id: user._id,
            isAdmin: user.isAdmin
        },
        configs.jwt.secret, {
            expresIn: 86400
        }

    )

}

//updateUser