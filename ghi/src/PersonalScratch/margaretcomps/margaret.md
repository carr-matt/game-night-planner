Signup Page Comments

//   return (
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
//                 <input required onChange={field} value={username} name="username" className="input" type="username" placeholder="example@example.com" />
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
//   );
// }





Login Page

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
