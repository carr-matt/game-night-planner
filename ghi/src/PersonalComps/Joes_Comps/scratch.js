// You can only use hooks inside of functions
// Everytime your function runs your hooks must run in the same order.
// State, Effect, Memo, Ref,Context, Reducer, Callback

// import React { useState } from 'react';


// function App() {
//     const [count, setCount] = useState(4)
// }
// function decrementCount() {
//     const[count, setCount] = useState(4)
// }



// Table for dashboard 
//  <table>
//               <thead>
//                   <tr>
//                       <th>Your Reviews</th>
//                   </tr>
//               </thead>
//               <tbody> 
//                <td> <input type="text" className="search-bar" placeholder="Search" onChange={(event) => {setSearchTerm(event.target.value)}}></input> </td>
//               {searchResults.map(app => {
//                 if(!app.completed){
//                     return(
//                     <tr key={app.id}>
//                         <td>{app.reviews}</td>
//                     </tr>
//                     )}
//                     })}
//               </tbody>
//               </table>
//               <table>
//               <thead>
//                     <tr>
//                       <th>Played Games</th>
//                     </tr>
//               </thead>
//               </table>
//               <table>
//               <thead>
//                     <tr>
//                       <th>Owned Games</th>
//                     </tr>
//               </thead>
//               </table>
//               <table>
//               <thead>
//                     <tr>
//                       <th>Liked Games</th>
//                     </tr>
//               </thead>
//               </table>

//               <tbody>
//                 {searchResults.map(app => {
//                   if(!app.completed){
//               </tbody>
