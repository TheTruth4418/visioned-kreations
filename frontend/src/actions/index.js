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
  
  export const fetchLogin = userObj => {
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/login", {
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
  const loginUser = userObj => ({
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