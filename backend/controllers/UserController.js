const { User , Token } = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const { jwt_secret, API_URL} = require('../config/config.json')[env];
const transporter = require('../config/nodemailer')
const UserController = {
    getAll(req, res){
        User.findAll({
            })
            .then(users => res.send(users))
    },
    async register(req, res) {
        try {
            const password = await bcrypt.hash(req.body.password, 9);
            const email = req.body.email
            const emailToken = jwt.sign({ email }, jwt_secret, { expiresIn: '3h' });
            const url = API_URL + '/users/confirmed/' + emailToken;
            await transporter.sendMail({
                to: email,
                subject: 'Debes confirmar tu registro en nuestro sistema',
                html:`
                <h3> Bienvenid@ ${req.body.username} a nuestro pan recien horneado. Sigue los pasoss para completar tu registro<h3>
                <a href="${url}">Confirma tu registro</a>
                Esto caduca en 3 horas.
                `
            });
            const user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password,
                confirmed: false,
                role: 'customer'
            });
            res.status(201).send({
                user,
                message: 'Te hemos enviado un email para confirmar tu registro'
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de crear el usuario'
            });
        }
    },
    async confirm(req, res){
        try{
            const emailToken =req.params.emailToken;
            const payload = jwt.verify(emailToken, jwt_secret);
            const email = payload.email;
            await User.update({
                confirmed:true
            }, {where: { email } });
            const user = await User.findOne({where:{email}});
            const authToken = jwt.sign({
                id: user.id
            }, jwt_secret);
            await Token.create({
                token:authToken,
                UserId: user.id
            });
            res.redirect('http://localhost:4200/user/confirmed/'+authToken);
        }
        catch (error) {
            console.error(error)
            res.status(500).send({message:'Ha habido un problema al confirmar el usuario', error})
        }
    },
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    username: req.body.username
                }
            })
            if (!user) {
                return res.status(400).send({
                    message: 'Usuario o contraseña incorrectas'
                })
            }
            if (!user.confirmed) {
                return res.status(400).send({
                    message: 'Debes confirmar tu email'
                })
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({
                    message: 'Usuario o contraseña incorrectas'
                })
            }
            const token = jwt.sign({
                id: user.id
            }, jwt_secret);
            Token.create({
                token,
                UserId: user.id
            });
            res.send({
                message: 'Bienvenid@ ' + user.username,
                user,
                token
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de logearte'
            });
        }
    },
    async getInfo(req,res){
        res.send(req.user);
    }
}
module.exports = UserController;