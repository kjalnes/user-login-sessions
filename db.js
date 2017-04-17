const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL);

const Product = conn.define('product', {
  name: conn.Sequelize.STRING
});

const User = conn.define('user', {
  name: conn.Sequelize.STRING
});


User.belongsTo(Product, { as: 'favoriteProduct'});
User.belongsTo(Product, { as: 'worstProduct'});


const sync = ()=> conn.sync({ force: true });

const seed = ()=> {
  const products = ['foo', 'bar', 'bazz'];
  const users = ['Nancy', 'Leo', 'Corny'];
  let foo, bar, bazz, nancy, leo, corny;

  return sync()
    .then(()=> {
      const productPromises = products.map(name => Product.create({ name }));
      const userPromises = users.map( name => User.create({ name }));

      return Promise.all( [...productPromises, ...userPromises ])
        .then( results => [foo, bar, bazz, nancy, leo, corny] = results )
        .then( () => {
          return Promise.all([
            nancy.setFavoriteProduct(foo),
            nancy.setWorstProduct(bazz),
            leo.setWorstProduct(bazz),
            leo.setFavoriteProduct(bar),
            corny.setWorstProduct(bazz),
            corny.setFavoriteProduct(foo)

          ])
        })
    });
};





 // return Promise.all(productPromises.concat(userPromises))
 //              .then(results => [foo, bar, bazz, moe, larry, curly] = results)
 //              .then( ()=> Promise.all([
 //                moe.setBestProduct(foo),
 //                moe.setWorstProduct(bar),
 //                curly.setBestProduct(bazz)
 //              ]))
 //    });







module.exports = {
  models: {
    Product,
    User
  },
  sync,
  seed
};
