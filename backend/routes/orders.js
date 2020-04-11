const router = require('express').Router();
const OrderController =require('../controllers/OrderController.js');
cosnt {authentication} =require('../middleware/authentication')

router.get('/user', authentication, OrderController.getByUser);
router.get('/',OrderController.getAll);
router.post('/',OrderController.insert);
router.delete('/:id',OrderController.delete);

module.exports=router;