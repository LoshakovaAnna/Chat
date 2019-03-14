import React, { Component } from 'react';

import { saveNickname} from '../redux/actions';
import { connect } from 'react-redux';

class Login extends Component {
    state = {
        nickname:''
    }

    handleInput = (e) =>{
        const { name, value } = e.target;
        this.setState( { [name]: value } );
    
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveNickname(this.state.nickname);        
       this.props.history.push('/chat');
    }

    render(){
        const { nickname } = this.state;
        
        return (
            <form className='form-inline container' onSubmit={this.handleSubmit}>                
                <label htmlFor="nickname">Имя</label>
                <input type="text" id="nickname" name="nickname" placeholder="Имя"
                    value={nickname} onChange={this.handleInput}></input>
                 <button type="submit">Войти</button>
            </form>
        )
    }
}

export default connect(null, {saveNickname})(Login);