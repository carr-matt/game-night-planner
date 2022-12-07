import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSignUpMutation } from './app/authApi';
import { preventDefault } from './app/utils';
import { updateField } from './app/accountSlice';
import Notification from './Notification';
import { useNavigate } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const { email, password } = useSelector(state => state.account);
  const [signUp, { error, isLoading: signUpLoading }] = useSignUpMutation();
  const field = useCallback(
    e => dispatch(updateField({field: e.target.name, value: e.target.value})),
    [dispatch],
  );
   const navigate = useNavigate()
   console.log(email, password)

  return (
        <div className="box content" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh"
        }}>
          <h3>Sign Up</h3>
          { error ? <Notification type="danger">{error.data.detail}</Notification> : null }
          <form method="POST"
        onSubmit={ (e) => {e.preventDefault()
          signUp({ email, password, })
          navigate("/login")
        }}
>
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
                <button disabled={signUpLoading} className="button is-primary">Submit</button>
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

export default Signup;
