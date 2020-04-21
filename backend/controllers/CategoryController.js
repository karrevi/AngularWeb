const {
    Category, Product
} = require('../models/index.js')
const CategoryController = {

    getAll(req, res) {
        Category.findAll({
            include: [Product]
        })
        .then(categories => res.send(categories))
        .catch(err => {
            console.log(err)
            res.status(500).send({ message: 'Ha habido un problema al cargar los productos' })
        })},
    insert(req, res) {
        Category.create({
                name: req.body.name
            })
            .then(category => res.send(category))
    },
    delete(req, res) {
        Category.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => res.send('El producto se ha eliminado correctamente'))
            .catch(err => res.send('problema para eliminar'))
    }
}
module.exports = CategoryController;