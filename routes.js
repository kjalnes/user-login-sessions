const app = require('express').Router();
const models = require('./db').models;
const jwt = require('jwt-simple');
const secret = process.env.SECRET || 'foo';

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


app.put('/users/favorite/:id', (req, res, next) => {
  models.User.update(
    { favoriteProductId: req.body.id },
    { where: { id: req.params.id }})
  .then( () => {
    return models.User.findOne({
      where: { id: req.params.id},
      include: [
        {
          model: models.Product,
          as: 'favoriteProduct'
        },
        {
          model: models.Product,
          as: 'worstProduct'
        }
      ]})
    .then( user => res.send( user))
  })
  .catch(next)
});


app.put('/users/worst/:id', (req, res, next) => {
  models.User.update(
    { worstProductId: req.body.id },
    { where: { id: req.params.id }})
  .then( () => {
    return models.User.findOne({
      where: { id: req.params.id},
      include: [
        {
          model: models.Product,
          as: 'favoriteProduct'
        },
        {
          model: models.Product,
          as: 'worstProduct'
        }
      ]})
    .then( user => res.send( user))
  })
  .catch(next)
});


app.post('/session', (req, res, next)=> {
  models.User.findOne({
    where: {
      name: req.body.name,
      password: req.body.password
    }
  })
  .then( user => {
    if(user){
      const token = jwt.encode({id: user.id}, secret);
      return res.send({ token });
    }
    return res.sendStatus(401);
  })
  .catch(next);
});


app.get('/session/:token', (req, res, next) => {
    try{
        const token = jwt.decode(req.params.token, secret);
        models.User.findOne({
          where: { id: token.id },
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
            .then( user => {
                if(!user) {
                    return res.sendStatus(401)
                }
                console.log('user on login', user)
                res.send(user)
            })

    }
    catch(err) {
        res.sendStatus(500)
    }
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

