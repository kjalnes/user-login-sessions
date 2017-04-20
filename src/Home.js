import React from 'react';
import { connect } from 'react-redux';




const UserItem = ({ user, key}) => {
    return (
            <li className="list-group-item" key={user.id}>
                <b>{ user.name}</b> <br />
                Favorite product is :
                { user.favoriteProduct !== null?  user.favoriteProduct.name : 'none' }  <br />

                Worst product is :
                { user.worstProduct !== null ?  user.worstProduct.name : 'none'}
            </li>
            )
}


const Home = ({ users })=> {
    return (
        <div className="well">
            <ul className="list-group">
                { users.map( user => <UserItem user={user} key={user.id} />)
                }
            </ul>
        </div>
    )
}



const mapStateToProps = (state) => (
    {
        users: state.users
    }
)

export default connect(mapStateToProps)(Home);
