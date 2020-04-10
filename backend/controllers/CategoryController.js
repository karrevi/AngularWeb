const { Category } = require('../models/index.js')
const CategoryController = {

    getAll(req,res){
        Category.findAll()
        .then(categories=>res.send(categories))
    },
    insert(req,res){
        Category.create({name:req.body.name})
        .then(category=>res.send(category))
    },
    delete(req, res) {
        Category.destroy({
            where: {
              id: req.params.id
            }
          })
          .then(()=>res.send('El producto se ha eliminado correctamente'))
          .catch(err => res.send('problema para eliminar'))
      } 
}
module.exports = CategoryController;