import { useState } from 'react';

//how do i make sure to test that the login info entered is what we alrady have stored.
//do i need an error message if they enter info that isn't in our system and direct to signup?
//make login button do something
//make button disabled if password and email address are not what they should be

function Login() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

    return (

<div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1 className="header-title">Login</h1>
                <form id="login-form">
                  <div className="textstyle">
                  <div className="form-floating mb-3">
                    <label htmlFor="email">Email Address</label>
                    <br/>
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" required type="text" name="email" id="email" className="form-control"/>
                  </div>
                  <div className="form-floating mb-3">
                    <label htmlFor="password">Password</label>
                    <br />
                    <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required type="text" name="password" id="password" className="form-control"/>
                    </div>
                  </div>
                  <center><button className="btn btn-secondary">Login</button></center>
                </form>
              </div>
            </div>
          </div>


    )
}

export default Login
