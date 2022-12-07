import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLogInMutation } from './app/authApi';
import { eventTargetSelector as target, preventDefault } from './app/utils';
import { updateField } from './app/accountSlice';
import Notification from './Notification';
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";



function Login() {
  const dispatch = useDispatch();
  const { username, password } = useSelector(state => state.account);
  const [logIn, { error, isLoading: logInLoading }] = useLogInMutation();
  const field = useCallback(
    e => dispatch(updateField({field: e.target.name, value: e.target.value})),
    [dispatch],
  );
  const navigate = useNavigate()

return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="example@example.com"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot your <a href="#">password?</a>
            <a> Well too bad. >:) </a>
          </p>
        </div>
      </form>
    </div>



//         <div className="box content" style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           height: "80vh",
//         }}>
//           <h3>Log In</h3>
//           { error ? <Notification type="danger">{error.data.detail}</Notification> : null }
//           <form method="POST" onSubmit={ (e) => {e.preventDefault()
//           logIn(e.target)
//           navigate('/')
//         }
//       }
//  >

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
//                 <button disabled={logInLoading} className="button is-primary">Submit</button>
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

export default Login;
