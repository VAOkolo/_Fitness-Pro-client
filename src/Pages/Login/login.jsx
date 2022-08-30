import React, { useContext } from 'react'
import AuthContext from '../../Context/AuthContext'

const Login = () => {
  let { loginUser, user, authTokens  } = useContext(AuthContext)
  console.log(user)
  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login
