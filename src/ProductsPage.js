import React from 'react';
import ProductList from './ProductList';
import { connect } from 'react-redux';

const ProductsPage = ({ user })=> {
     return (
      <div className='well'>
        <div>
            <h3>User details </h3>
            <b>Name: </b>
            { user ? user.name : 'none'}<br/>
            <b>Favorite product: </b>
            { user && user.favoriteProduct ? user.favoriteProduct.name : 'none'} <br/>
            <b>Least favorite product: </b>
            { user && user.worstProduct ? user.worstProduct.name : 'none' }

            <br/>
        </div>
        <hr />
        <ProductList />
      </div>
    )
};

const mapStateToProps = ({ user, auth }) => {
    return {
        user: auth.user
    }
}

export default connect(mapStateToProps)(ProductsPage);

