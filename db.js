const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL);

const Product = conn.define('product', {
  name: conn.Sequelize.STRING
});

const User = conn.define('user', {
  name: conn.Sequelize.STRING,
  password: conn.Sequelize.STRING
});


User.belongsTo(Product, { as: 'favoriteProduct'});
User.belongsTo(Product, { as: 'worstProduct'});


const sync = ()=> conn.sync({ force: true });

const seed = ()=> {
  const products = ['fish', 'lettuce', 'ketchup'];
  const users = ['Nancy', 'Leo', 'Corny'];
  let fish, lettuce, ketchup, nancy, leo, corny;

  return sync()
    .then(()=> {
      const productPromises = products.map(name => Product.create({ name }));
      const userPromises = users.map( name => User.create({ name }));

      return Promise.all( [...productPromises, ...userPromises ])
        .then( results => [fish, lettuce, ketchup, nancy, leo, corny] = results )
        .then( () => {
          return Promise.all([
            nancy.setFavoriteProduct(fish),
            nancy.setWorstProduct(lettuce),
            leo.setWorstProduct(lettuce),
            leo.setFavoriteProduct(ketchup),
            corny.setWorstProduct(lettuce),
            corny.setFavoriteProduct(ketchup)

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
