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