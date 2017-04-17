import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const App = ({ children, products })=> (
  <div className='container'>
    <h1>React Redux Login</h1>
    <pre> FS Weekend Project | react | react-router | react-redux | <a href="https://github.com/kjalnes/weekend-project-react-redux">github repo</a>
    </pre>

    <div className="well">
      Add ability for a logged in user to select their best product and their worst product
    </div>

    <div className='container'>
    <Link to='/'>Home</Link>
    { ' | ' }
    <Link to='/products'>Products ({ products.length})</Link>
    </div>
    { children }
  </div>
);

const mapStateToProps = ({ products})=>(
  { products }
);

export default connect(mapStateToProps)(App);
