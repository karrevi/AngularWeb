const router = require('express').Router();
const UserController = require('../controllers/UserController');
const {authentication,isAdmin} = require('../middleware/authentication')

router.post('/register',UserController.register);
router.post('/login',UserController.login);
router.get('/info',authentication, UserController.getInfo);
router.get('/',UserController.getAll);
router.get('/confirmed/:emailToken', UserController.confirm);

module.exports = router
