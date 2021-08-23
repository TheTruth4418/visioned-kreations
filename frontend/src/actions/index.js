export const postSignup = userObj => {
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/signup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({userObj})
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            alert(data.message)
          } else {
            console.log(data)
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
          }
        })
    }
  }
  
  export const fetchLogin = (userObj) => {
    let state = userObj.state
    console.log(state)
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({state})
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            alert(data.message)
          } else {
            console.log(data)
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
            userObj.history.push('/')
          }
        })
    }
  }
  const loginUser = (userObj) => ({
    type: 'LOGIN_USER',
    payload: userObj
})


export const fetchUser = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/api/v1/user", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            localStorage.clear()
          } else {
            dispatch(loginUser(data.user))
          }
        })
    }
  }
}

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

export const getItems = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/items", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          alert(data.message)
        } else {
          return dispatch({
            type: 'GET_ITEMS',
            payload: data
          })
        }
      })
  }
}

export const fetchItem = obj => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/items/${obj.item}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          alert(data.message)
        } else {
          return dispatch({
            type: 'VIEW_ITEM',
            payload: data
          })
        }
      })
  }
}

export const addCupToCart = obj => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/api/v1/users/cart/add_cup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({obj})
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            console.log(data.message)
          } else {
            console.log(data)
          }
        })
    } else {
      alert("You must make an account before using the cart!")
    }
  }
}

export const addShirtToCart = obj => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/api/v1/users/cart/add_shirt", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({obj})
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            console.log(data.message)
          } else {
            console.log(data)
          }
        })
    } else {
      alert("You must sign in before using the cart!")
    }
  }
}

export const viewCart = obj => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/api/v1/users/cart", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            console.log(data.message)
          } else {
            dispatch({
              type: "VIEW_CART",
              payload: data
            })
          }
        })
    } else {
      alert("You must sign in before using the cart!")
    }
  }
}

export const removeItem = obj => {
  const token = localStorage.token;
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/users/cart/remove_item", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({obj})
      })
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: 'VIEW_CART',
          payload: data
        })
      })
  }
}

export const clearCart = () => {
  const token = localStorage.token;
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/users/cart/clear", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: 'CLEAR_CART',
          payload: data
        })
      })
  }
}

export const checkoutCart = (props) => {
  const token = localStorage.token;
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/users/cart/checkout", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        props.push(`/orders/confirmation/${data.id}`)
        dispatch({
          type: 'VIEW_ORDER',
          payload: data
        })
      })
  }
}

export const orderHistory = () => {
  const token = localStorage.token;
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/users/orders/history", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: 'ORDER_HISTORY',
          payload: data
        })
      })
  }
}

export const displayOrder = (id) => {
  const token = localStorage.token;
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/order/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: 'VIEW_ORDER',
          payload: data
        })
      })
  }
}