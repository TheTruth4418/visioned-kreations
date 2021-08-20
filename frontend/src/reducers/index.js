const initialState = {
  loading: false
}

const rootReducer = (state=initialState,action) => {
    switch(action.type){
      case 'LOGIN_USER':
        return {...state, currentUser: action.payload, cart: undefined}
      case 'LOGOUT_USER':
        return { ...state, currentUser: undefined, cart:undefined }
      case 'GET_ITEMS':
        return { ...state, items: action.payload, viewing: undefined, cart: undefined}
      case 'VIEW_ITEM':
        return {...state, viewing: action.payload, cart: undefined }
      case 'VIEW_CART':
        return {...state, cart: action.payload}
      case 'CLEAR_CART':
        return{...state, cart: {}}
      default:
        return state;
    }
}

export default rootReducer;