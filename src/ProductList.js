import React from 'react';
import { connect } from 'react-redux';
import { destroyProduct } from './productsReducer';
import { updateUsersFavorite, updateUsersWorst } from './authReducer';

const ProductListItem = ({ product, destroyProduct, updateUsersFavorite, updateUsersWorst })=> (
  <li className='list-group-item'>
    { product.name }
    <button onClick={ destroyProduct } className='btn btn-danger pull-right'>x</button>
    <button onClick={ updateUsersFavorite } className="btn btn-default pull-right">Favorite</button>
    <button onClick={ updateUsersWorst } className="btn btn-default pull-right">Worst</button>
    <br style={{ clear: 'both'}} />
  </li>
);

const ProductList = ({ products, destroyProduct, updateUsersFavorite, updateUsersWorst, user})=> (
    <ul className='list-group'>
    {
      products.map( product => {

        return (
          <ProductListItem
            key={ product.id}
            product={ product }
            destroyProduct={ ()=> destroyProduct(product) }
            updateUsersFavorite={ () => updateUsersFavorite(user, product)
            }
            updateUsersWorst={ () => updateUsersWorst(user, product) }
          />
        );
      })
    }
    </ul>
);


const mapDispatchToProps = (dispatch) => (
  {
    destroyProduct: (product) => dispatch(destroyProduct(product)),
    updateUsersFavorite:  (user, product) => dispatch(updateUsersFavorite(user, product)),
    updateUsersWorst:  (user, product) => dispatch(updateUsersWorst(user, product))
  }
);

const mapStateToProps = ({ products, auth }) => {
  return {
    products,
    user: auth.user

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
