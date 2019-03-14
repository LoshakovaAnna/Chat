const initialState = {
    nickname: '',
    messages: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "SAVE_NICKNAME":
        return {                    
            ...state,                 
            nickname : action.payload 
        };

      case "LOAD_MESSAGES_SUCCES": 
        return{
          ...state, 
          messages : action.payload
        }
      
      default:
        return state;
    }
  }