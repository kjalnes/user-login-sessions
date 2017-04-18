import React from 'react';
import { connect } from 'react-redux';
import { destroyProduct } from './productsReducer';

const ProductListItem = ({ product, destroyProduct })=> (
  <li className='list-group-item'>
    { product.name }

    <button onClick={ destroyProduct } className='btn btn-danger pull-right'>x</button>
    <button className="btn btn-default pull-right">Favorite</button>
    <button className="btn btn-default pull-right">Worst</button>

    <br style={{ clear: 'both'}} />
  </li>
);


const ProductList = ({ products, destroyProduct})=> (
    <ul className='list-group'>
    {
      products.map( product => {

        return (
          <ProductListItem  key={ product.id} product={ product } destroyProduct={ ()=> destroyProduct(product) } />
        );
      })
    }
    </ul>
);

const mapDispatchToProps = (dispatch) => (
  {
    destroyProduct: (product) => dispatch(destroyProduct(product))
  }
);

const mapStateToProps = (state) => {
  // console.log(state)
 return { products: state.products }

};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
