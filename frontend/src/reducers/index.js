const initialState = {
    currentUser: undefined
}

const rootReducer = (state=initialState,action) => {
    switch(action.type){
      case 'LOGIN_USER':
        return {...state, currentUser: action.payload}
      default:
        return state;
    }
}

export default rootReducer;