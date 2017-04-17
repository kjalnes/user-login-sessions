import React from 'react';
import ProductList from './ProductList';

const ProductsPage = ()=> (
  <div className='well'>
    <div>
        <h3>User details </h3>
        Name:<br/>
        Favorite product:<br/>
        Least favorite product:<br/>

    </div>
    <hr />
    <ProductList />
  </div>
);

export default ProductsPage;
