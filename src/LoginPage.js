// form
import React, { Component } from 'react';
import { login, logout } from './authReducer';
import { connect } from 'react-redux';

class LoginPage extends Component {
    constructor({ login, logout }) {
        // this is just a state for this component
        super()
        this.state = { name: "", password: ""};
        this.onInputChange = this.onInputChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    onLogin(ev) {
        ev.preventDefault()
        // console.log(this.state)
        this.props.login(this.state)
    }

    onLogout(ev) {
        ev.preventDefault()
        this.props.logout(this.state)
        this.setState({name: "", password: ""})
    }

    onInputChange(name, ev) {
        // console.log(name, ev.target.value)
        this.setState({ [name] : ev.target.value})
    }

    render() {
        return (
            <form onSubmit={ this.onLogin }>
                <div className='form-group'>
                    <input onChange={ this.onInputChange.bind(null, 'name')} className='form-control' value={ this.state.name } placeholder="name" />
                </div>
                <div className='form-group'>
                    <input onChange={ this.onInputChange.bind(null, 'password')} className='form-control' value={ this.state.password } placeholder="password" />
                </div>
                <button className='btn btn-default'>Login</button>
                <button onClick={ this.onLogout } className='btn btn-danger'>Log out</button>

            </form>
        )
    }
};

    // login is our post async fn imported from authReducer

const mapDispatchToProps = (dispatch) => (
    {
        login: ( credentials ) => dispatch(login(credentials)),
        logout: () => dispatch(logout())

    }
);

export default connect( null, mapDispatchToProps)(LoginPage);
