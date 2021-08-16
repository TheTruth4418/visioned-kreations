const initialState = {

}

const rootReducer = (state=initialState,action) => {
    switch(action.type){
      case 'LOGIN_USER':
        return {...state, currentUser: action.payload}
      case 'LOGOUT_USER':
        return { ...state, currentUser: undefined }
      case 'GET_ITEMS':
        return { ...state, items: action.payload }
      default:
        return state;
    }
}

export default rootReducer;