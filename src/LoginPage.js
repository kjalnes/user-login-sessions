// form
import React, { Component } from 'react';

class LoginPage extends Component {
    constructor() {
        // this is just a state for this component
        super()
        this.state = { name: "", password: ""};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(name, ev) {
        console.log(name, ev.target.value)
        this.setState({ [name] : ev.target.value})
    }

    render() {
        return (
            <form>
                <div className='form-group'>
                    <input onChange={ this.onInputChange.bind(null, 'name')} className='form-control' value={ this.state.name } placeholder="name" />
                </div>
                <div className='form-group'>
                    <input onChange={ this.onInputChange.bind(null, 'password')} className='form-control' value={ this.state.password } placeholder="password" />
                </div>
            </form>
        )
    }
};

export default LoginPage;
