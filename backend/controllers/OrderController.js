const { Product, Order, OrderProduct, Category } = require('../models/index.js')

const OrderController = {
    getAll(req,res){
        Order.findAll({
            include:[Product]
        })
        .then(order=>res.send(order))
    },
    insert(req,res){
        Order.create({
            status:"pending",
            deliveryday:req.body.deliveryday
        })
        .then(order => {
            req.body.products.forEach(product=>{
                order.addProduct(
                    product[0], {
                    through: {
                    unidades: product[1]
                    }
            })
            });
            res.send(order);
        });
    },

    async delete(req, res) {
        try {
            await Order.destroy({
                where: {
                    id: req.params.id
                }
            })
            await OrderProduct.destroy({
                where: {
                    OrderId: req.params.id
                }
            })
            res.send(
                'El pedido ha sido eliminado'
            )
        } catch (error) {
            console.log(error)
        }
    }}
module.exports = OrderController;