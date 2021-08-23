const initialState = {
  loading: false
}

const rootReducer = (state=initialState,action) => {
    switch(action.type){
      case 'LOGIN_USER':
        return {...state, currentUser: action.payload, cart: undefined, order:undefined}
      case 'LOGOUT_USER':
        return { ...state, currentUser: undefined, cart:undefined, order: undefined }
      case 'GET_ITEMS':
        return { ...state, items: action.payload, viewing: undefined, cart: undefined, order: undefined}
      case 'VIEW_ITEM':
        return {...state, viewing: action.payload, cart: undefined, order: undefined }
      case 'VIEW_CART':
        return {...state, cart: action.payload, order: undefined}
      case 'CLEAR_CART':
        return{...state, cart: {}}
      case 'VIEW_ORDER':
        return{...state, cart: undefined, order: action.payload}
      case 'ORDER_HISTORY':
        return{currentUser: {...state.currentUser}, orders: action.payload}
      default:
        return state;
    }
}

export default rootReducer;