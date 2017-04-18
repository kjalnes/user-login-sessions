import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Nav from './Nav';

const App = ({ children, products })=> (
  <div className='container'>
    <Nav />
    { children }
  </div>
);

const mapStateToProps = ({ products })=>(
  { products
  }
);

export default connect(mapStateToProps)(App);
