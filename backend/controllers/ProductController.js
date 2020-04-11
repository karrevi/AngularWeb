const { Product, Category, OrderProduct, Sequelize } = require('../models/index.js')
const Op = Sequelize.Op;


const ProductController = {
    getAll(req,res){
        Product.findAll({
            include:[Category],
            order:[
                ['name', 'ASC']
            ]
        })
        .then(products=>res.send(products))
        .catch(err=>{
            console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los productos'})
        })
    },
    insert(req, res){
        Product.create({...req.body})
        .then(product => res.send({
            product,
            message: 'Se creó el producto'
        }))
        .catch(err => res.send({
            message: 'Hubo un problema al crear el producto'
        }))
    },
    getByCategory(req , res){
        Product.findAll({
            include: [Category],
            where: {
                categoryId: req.params.categoryId
            }
        })
        .then(products => res.send(products))
    },    
    async delete(req, res) {
        try {
            await Product.destroy({
                where: {
                    id: req.params.id
                }
            })
            await OrderProduct.destroy({
                where: {
                    ProductId: req.params.id
                }
            })
            res.send(
                'El producto ha sido eliminado'
            )
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports=ProductController;