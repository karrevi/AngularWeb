const router = require('express').Router();
const ProductController =require('../controllers/ProductController.js')

router.get('/',ProductController.getAll);
router.post('/',ProductController.insert);
router.delete('/:id',ProductController.delete);
router.get('/category/:categoryId', ProductController.getByCategory);

module.exports=router;