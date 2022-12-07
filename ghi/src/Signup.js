import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSignUpMutation } from './app/authApi';
import { preventDefault } from './app/utils';
import { updateField } from './app/accountSlice';
import Notification from './Notification';
import { useNavigate } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const { username, password } = useSelector(state => state.account);
  const [signUp, { error, isLoading: signUpLoading }] = useSignUpMutation();
  const field = useCallback(
    e => dispatch(updateField({field: e.target.name, value: e.target.value})),
    [dispatch],
  );
   const navigate = useNavigate()

return (
<div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary">
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Remember your password. Or else.
          </p>
        </div>
      </form>
    </div>
//         <div className="box content" style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           height: "80vh"
//         }}>
//           <h3>Sign Up</h3>
//           { error ? <Notification type="danger">{error.data.detail}</Notification> : null }
//           <form method="POST"
//         onSubmit={ (e) => {e.preventDefault()
//           signUp({ username, password, })
//           navigate("/login")
//         }}
// >
//             <div className="field">
//               <label className="label" htmlFor="email">Email</label>
//               <div className="control">
//                 <input required onChange={field} value={username} name="username" className="input" type="email" placeholder="example@example.com" />
//               </div>
//             </div>
//             <div className="field">
//               <label className="label">Password</label>
//               <div className="control">
//                 <input required onChange={field} value={password} name="password" className="input" type="password" placeholder="password" />
//               </div>
//             </div>
//             <div className="field is-grouped">
//               <div className="control">
//                 <button disabled={signUpLoading} className="button is-primary">Submit</button>
//               </div>
//               <div className="control">
//                 <button
//                   type="button"
//                   onClick={() => dispatch((null))}
//                   className="button">Cancel</button>
//               </div>
//             </div>
//           </form>
//         </div>
  );
}

export default Signup;
