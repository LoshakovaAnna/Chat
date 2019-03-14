import axios from 'axios';

export const saveNickname = (nickname)   => ({ type: "SAVE_NICKNAME", payload: nickname });

const apiUrl = 'https://serene-mesa-35124.herokuapp.com/api/chats';

export const loadMessages = () => {
    return (dispatch) =>{
        axios.get(apiUrl)
            .then(response => {
              dispatch(loadMessagesSucces(response.data));
            })
            .catch( e => {console.log("load not work")})
    }
}

export const putMessage = (obj) => {
    return (dispatch) =>{
        axios.post(apiUrl, obj)
            .then(response => {
                console.log(response.data)
            })
    }
}

 const loadMessagesSucces = (messages) =>({ type: "LOAD_MESSAGES_SUCCES", payload: messages });
