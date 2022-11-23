import { useState } from 'react';

//how am i going to use the re-enter password feature to test the previous input field?
//make signup button actually submit and store this information
//error message if they already have an account
//make button disabled if password and email address are not what they should be

function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    return (

<div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1 className="header-title">Signup</h1>
                <form id="login-form">
                  <div className="textstyle">
                  <div className="form-floating mb-3">
                    <label htmlFor="name">Email Address</label>
                    <br/>
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" required type="text" name="email" id="email" className="form-control"/>
                  </div>
                  <div className="form-floating mb-3">
                    <label htmlFor="employee_id">Password</label>
                    <br />
                    <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required type="text" name="password" id="password" className="form-control"/>
                    </div>
                    <div className="form-floating mb-3">
                    <label htmlFor="employee_id">Re-enter Password</label>
                    <br />
                    <input placeholder="Re-enter Password" required type="text" name="password" id="password" className="form-control"/>
                    </div>
                  </div>
                  <center><button className="btn btn-secondary">Signup</button></center>
                </form>
              </div>
            </div>
          </div>

    )
}

export default Signup
