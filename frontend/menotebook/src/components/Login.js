import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css"
function Login() {

  const [credentials, setcredentials] = useState({ email: "", password: "" })
  const navigate = useNavigate();
   const [warning, setwarning] = useState(false)

  const handlesubmit = async (e) => {
    e.preventDefault();
    const host = "http://localhost:5000";
    let url = `${host}/api/auth/login`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        //  'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWFkMmYzZWMyMjg5NDBlMDJkMTc4NSIsImlhdCI6MTY1NDMxNDI4Mn0.tROxEfUyVlLBIli7862yVTcROqq9QM6xwUy6vxB-uv8'

      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })



    })

    let data = await response.json()
    console.log(data.success)
   
    if (data.success) {
      // to save the authtoken in local storge 
      localStorage.setItem('token', data.jwtauthentication)
      navigate('/');
    
    } else {

      setwarning(true)
    }
  }
  const handleOnChange = (e) => {

    setcredentials({ ...credentials, [e.target.name]: [e.target.value] }) //unable to understand this line
  }

  return (
    <><section className="vh-100" style={{ backgroundColor: "#eee", padding: "40px" }}>
        {warning?<div className="alert alert-danger" role="alert">
           wrong credentials
</div>: <div className="alert alert-primary visually-hidden " role="alert">
          Login  success
</div> }
      
      <div className='container card text-black w-50  bgmain  '>
        <form onSubmit={handlesubmit}>
          {/* <!-- Email input --> */}
          <div className="form-outline mb-4  ">
            <input type="email" name='email' value={credentials.email} id="form2Example1" onChange={handleOnChange} className="form-control " />
            <label className="form-label" htmlFor="form2Example1">Email address</label>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input type="password" name='password' value={credentials.password} id="form2Example2" onChange={handleOnChange} className="form-control" />
            <label className="form-label" htmlFor="form2Example2">Password</label>
          </div>

          {/* <!-- 2 column grid layout htmlForinline styling --> */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* <!-- Checkbox --> */}
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" readOnly id="form2Example31" checked />
                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
              </div>
            </div>

            <div className="col">
              {/* <!-- Simple link --> */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          {/* <!-- Submit button --> */}
          <div className="d-grid gap-2 d-block">
            <button type="submit" className="btn btn-primary   mb-4">Sign in</button>
          </div>
          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
    </>

  )
}

export default Login