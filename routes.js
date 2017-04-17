const app = require('express').Router();
const models = require('./db').models;

module.exports = app;


app.get('/products', (req, res, next)=> {
  models.Product.findAll({ order: 'name'})
    .then( products => res.send(products ))
    .catch(next);
});

app.delete('/products/:id', (req, res, next)=> {
  models.Product.destroy({ where: { id: req.params.id}})
    .then( () => res.sendStatus(204))
    .catch(next);
});


app.get('/users', (req, res, next)=> {
  models.User.findAll({
    order: 'name',
    include: [
        {
            model: models.Product,
            as: 'favoriteProduct'
        },
        {
            model: models.Product,
            as: 'worstProduct'
        }]
    })
    .then( users => res.send( users ))
    .catch(next);
});
