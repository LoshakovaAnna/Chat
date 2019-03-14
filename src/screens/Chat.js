import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment  from 'moment';

import { loadMessages, putMessage } from '../redux/actions';

class Chat extends Component {
    state = {
        message:''
    }

    componentWillMount(){
        const load = this.props.loadMessages;
        setTimeout(function run() {
            load();                
            setTimeout(run, 5000);
        }, 5000);    
    }

    hanleUpdate = () =>{
        this.props.loadMessages();        
    }

    handleInput = (e) =>{
        const { name, value } = e.target;
        this.setState( { [name]: value } );    
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const { nickname } = this.props;
        const { message } = this.state;
        const newMes = { nickname, message }
        this.props.putMessage(newMes);     
        this.setState( { message : "" } );
    }

    render(){
        const {nickname, messages } = this.props;
        const {message} = this.state;

        return (
            <div className="container">
               <h1 className="header">{nickname}</h1> 
               <button className="btn btn-danger" onClick={this.hanleUpdate}>Обновить</button>

                <div className="container chat">

                    { (!messages) && <div>Load..</div>}

                    { (messages) && ( messages.map( (mes, i) => {
                        return ( 
                            <div key={i}  className="clearfix">
                                { ( mes.nickname === nickname ) && 
                                    <div className ="mes-left">                            
                                        <div className="direct-chat-name">{mes.nickname} </div>
                                        <div className="direct-chat-text"> {mes.message}</div>
                                        <div className="direct-chat-info">{moment(mes.created).format(' h:mm:ss, MMMM DD ')}</div>
                                    </div>
                                }

                                { ( mes.nickname !== nickname ) && 
                                    <div className=" mes-right ">                             
                                        <div className="direct-chat-name">{mes.nickname} </div>
                                        <div className="direct-chat-text"> {mes.message}</div>
                                        <div className="direct-chat-info">{moment(mes.created).format(' h:mm:ss, MMMM DD ')}</div>
                                    </div>
                                }      
                            </div>
                        )
                    })
                    )
                    }
                    </div>

                <form className="submit-mes">
                    <textarea type="text" className="write-mes" name="message" 
                        value={message} onChange={this.handleInput}></textarea>
                    <button onClick={this.handleSubmit} className="btn-sub " type="submit">Отправить</button>                  
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nickname: state.nickname,
        messages: state.messages
    };
}

export default connect(mapStateToProps, {loadMessages, putMessage})(Chat);