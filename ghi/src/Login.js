import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLogInMutation } from './app/authApi';
import { eventTargetSelector as target, preventDefault } from './app/utils';
import { updateField } from './app/accountSlice';
import Notification from './Notification';
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react'
import { Alert } from 'react-bootstrap';


function Login() {
  const dispatch = useDispatch();
  const { username, password } = useSelector((state) => state.account);
  const [logIn, { error, isLoading: logInLoading, isSuccess: loginSuccessful }] = useLogInMutation();
  const field = useCallback(
    e => dispatch(updateField({field: e.target.name, value: e.target.value})),
    [dispatch],
  );
  console.log(loginSuccessful)
  const navigate = useNavigate()

  const handleLogin = async () => {
  if (loginSuccessful) {
    navigate('/')
  }
}

useEffect(() => {
  handleLogin();
}, [loginSuccessful]);

return (
    <div className="Auth-form-container">
      <form className="Auth-form bg-dark centered-form" method='POST' onSubmit={ async (e) => {
        e.preventDefault(); await logIn(e.target); handleLogin();}}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          { error ? <Alert variant="danger">{error.data.detail}</Alert> : null }
                    <div className="text-center">
            <a href="/SignUp">Need to Register?{" "}</a>
          </div>
          <div className="form-group mt-3">
            <label htmlFor='email'>Email address</label>
            <input
              required onChange={field} value={username} name="username"
              type="username"
              className="form-control mt-1"
              placeholder="example@example.com"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              required onChange={field} value={password} name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button disabled={logInLoading} type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot your password? Too bad. {'>'}:)
          </p>
        </div>
      </form>
    </div>
  )
}



  // return (
  //       <div className="box content" style={{
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         height: "80vh"
  //       }}>
  //         <h3>Log In</h3>
  //         { error ? <Alert variant="danger">{error.data.detail}</Alert> : null }
  //     <form method="POST" onSubmit={ async (e) => {
  //       e.preventDefault(); await logIn(e.target); handleLogin();}}>
  //           <div className="field">
  //             <label className="label" htmlFor="email">Email</label>
  //             <div className="control">
  //               <input required onChange={field} value={username} name="username" className="input" type="username" placeholder="example@example.com" />
  //             </div>
  //           </div>
  //           <div className="field">
  //             <label className="label">Password</label>
  //             <div className="control">
  //               <input required onChange={field} value={password} name="password" className="input" type="password" placeholder="password" />
  //             </div>
  //           </div>
  //           <div className="field is-grouped">
  //             <div className="control">
  //               <button disabled={logInLoading} className="button is-primary">Submit</button>
  //             </div>
  //             <div className="control">
  //               <button
  //                 type="button"
  //                 onClick={() => dispatch((null))}
  //                 className="button">Cancel</button>
  //             </div>
  //           </div>
  //         </form>
  //       </div>
  // );
// }

export default Login;
