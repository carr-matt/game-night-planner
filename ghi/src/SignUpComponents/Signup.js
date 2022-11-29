

function Signup() {
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
                    <input placeholder="Email Address" required type="text" name="email" id="email" className="form-control"/>
                  </div>
                  <div className="form-floating mb-3">
                    <label htmlFor="employee_id">Password</label>
                    <br />
                    <input placeholder="Password" required type="text" name="password" id="password" className="form-control"/>
                    </div>
                    <div className="form-floating mb-3">
                    <label htmlFor="employee_id">Re-enter Password</label>
                    <br />
                    <input placeholder="Re-enter Password" required type="text" name="password" id="password" className="form-control"/>
                    </div>
                  </div>
                  <button className="btn btn-secondary">Signup</button>
                </form>
              </div>
            </div>
          </div>

    )
}

export default Signup
