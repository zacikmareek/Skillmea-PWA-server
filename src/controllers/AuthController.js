const { response } = require('express');

module.exports = {
    async register (req, res) {
        const username = req.body.username;
        const password = req.body.password;
        if(username == 'admin' && password == 'admin'){
            res.status(400).send({
                error: 'Používateľské meno sa už používa, zvoľte iné prosím.'
            })   
            return;
        }
        res.status(201).send({
            message: "Registrácia prebehla úspešne."
        })
    },
    async login (req, res) {
        const username = req.body.username;
        const password = req.body.password;
        if(username != 'admin' || password != 'admin'){
            res.status(400).json({
                message: "Nesprávne prihlasovacie údaje!."
            })
            return;
        }
        res.status(200).send({
            message: "Prihlásenie prebehlo úspešne."
        })
    },
    async logout (req, res) {
        res.status(200).send({message: 'Odhlásenie prebehlo úspešne!'})
    },
}