import React from 'react';
import { connect } from 'react-redux';


const Home = ({ users, products })=> {
    console.log('users', users)
    return (
        <ul className="list-group">
            { users.map( user => {
                return <li className="list-group-item" key={user.id}>
                    <b>{user.name}</b> <br />
                    Favorite product is {user.favoriteProduct.name }<br />
                    Worst product is {user.worstProduct.name}
                 </li>
                })
            }
        </ul>
    )
}

const mapDispatchToProps = (state) => (
    {
        products: state.products,
        users: state.users
    }
)

export default connect(mapDispatchToProps)(Home);
