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
  const { email, password } = useSelector((state) => state.account);
  console.log(email, password)
  const [logIn, { error, isLoading: logInLoading, isSuccess: loginSuccessful }] = useLogInMutation();
  const field = useCallback(
    e => dispatch(updateField({field: e.target.name, value: e.target.value})),
    [dispatch],
  );
  console.log(loginSuccessful)
  const navigate = useNavigate()

  return (
        <div className="box content" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh"
        }}>
          <h3>Log In</h3>
          { error ? <Notification type="danger">{error.data.detail}</Notification> : null }
          <form method="POST" onSubmit={ (e) => {e.preventDefault()
          logIn(e.target)
          if (loginSuccessful) {
            navigate('/')
          } else {
            alert("Login failed. Please try again!")
            // window.location.reload()
          }
      }
    } >
            <div className="field">
              <label className="label" htmlFor="email">Email</label>
              <div className="control">
                <input required onChange={field} value={email} name="email" className="input" type="email" placeholder="example@example.com" />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input required onChange={field} value={password} name="password" className="input" type="password" placeholder="password" />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button disabled={logInLoading} className="button is-primary">Submit</button>
              </div>
              <div className="control">
                <button
                  type="button"
                  onClick={() => dispatch((null))}
                  className="button">Cancel</button>
              </div>
            </div>
          </form>
        </div>
  );
}

export default Login;
