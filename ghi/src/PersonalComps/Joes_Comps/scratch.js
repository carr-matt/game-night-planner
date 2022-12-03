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
// import Paper from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';

//Need to import a component library FUCK ZOOM loool
//it doesnt look like you have a compentent libraby tho. It would be a dependency in your package.json
//if you want to do grid, you need to use it ass (lol) css
//like this 
/*
  <div className="some css box with grid">
    <div className="one of the pieces of the grid">
      //content
    </div>
  </div> 
  Bet llloooool
  Hahah thank you man. Truly appreciate the help with this
  
  <3 AHahhahsahahahshahahhahahahahaha Peace bro 
*/
// np my dood. React is my bread and butter so if you need any tips lmk

//c ya m8!


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



// Construct.js

// import {useState} from 'react'

// function Construct(props) {

//     const [userInput, setUserInput] = useState('catan')

//     const pad2 = num => String(num).padStart(2, '0');

//     const handleChange = (e) =>{
//         setUserInput(e.target.value)
//     }

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>{userInput}</h1>
//                 <h2>Coming on (or before)</h2>
//                 <h2>{props.info.year}-{pad2(props.info.month)}-{pad2(props.info.day)}</h2>
//                 <h2>by or <strong>WELL BEFORE</strong> {pad2(props.info.hour)}:{pad2(props.info.min)}</h2>
//                 <input onChange={(e) => handleChange(e)}></input>
//             </header>
//         </div>
//     )
// }

// export default Construct;


// import React, {useState, useRef, useEffect} from 'react'
// import moment from 'moment';

// function UserDashboard() {
//   const blankForm = {
    
//     reviews: "",
//     playedGames: "",
//     ownedGames: "",
//     likedGames: "",
//   }

// const [playedGames, setPlayedGames] = useState([]);
// const [playedGames, setPlayedGames] = useState([]);
// const [playedGames, setPlayedGames] = useState([]);
// const [playedGames, setPlayedGames] = useState([]);

// async function getPlayedGames() {
//     let listUrl = ""
//     try {
//       const response = await fetch(listUrl);
//       const listOfPlayedGames = await response.json();
//       setPlayedGames(listOfPlayedGames)
//     } catch (e) {
//       console.error(e);
//     }
//   }






// All my previous Dashboard Code

// function UserDashboard() {
//   const blankForm = {
//     ownedGame: "",
//     likedGame: "",
//   }

// const [ownedGames, setOwnedGames] = useState([]);
//   const [likedGames, setLikedGames] = useState([]);
//     // const [playedGames, setPlayedGames] = useState([]) //Destructor = declare multiple variables on one line. State is a function which exporsts multiple variables
//     // setPlayedGames('newPlayedGames', playedGames) // setPlayed games is a function and now it replaces playedGames as Risk. 
//     // playedGames // ['catan']

//   async function getOwnedGames() {
//     let ownedUrl = "http://localhost:8080/games/ownedGames/"
//     try {
//       const response = await fetch(ownedUrl);
//       const listOfOwnedGames = await response.json();
//       setOwnedGames(listOfOwnedGames)
//     } catch (e) {
//       console.error(e);
//     }
//   }

//   useEffect(
//     () => {
//       getOwnedGames();
//     }, []
//   )

//   async function getLikedGames() {
//     let likedUrl = "http://localhost:8080/games/likedGames/"
//     try {
//       const response = await fetch(likedUrl);
//       const listOfLikedGames = await response.json();
//       setLikedGames(listOfLikedGames)
//     } catch (e) {
//       console.error(e);
//     }
//   }

//   useEffect(
//     () => {
//       getLikedGames();
//     }, []
//   )




// 4 grids
//  <div className="app-list">
//       <h1 className="Header">User Dashboard </h1>
//         <Box sx={{ flexGrow: 1 }}>
//          <Grid container spacing={5}> {/* space between Items in grid */}
//           <Grid item={true} xs={6} md={3}> {/* xs = the height and md = the column space it takes up out of 12 */}
//             <Item> Your Reviews </Item>
//           </Grid>
//           <Grid item xs={6} md={3}>
//             <Item> Played Games </Item>
//           </Grid>
//           <Grid item xs={6} md={3}>
//             <Item> Owned Games </Item> {/* xs = the height and md = the column space it takes up out of 12 */}
//             <Item> <select id="owned-form1" className="form-control" onChange={handleChange}>  {/* {ownedGames.map(ownedGame => { */}
//                     <option id="owned-form1" value="">Your Owned Games</option>
//                     {data.games.map( game => {
//                     return (
//                       <option key={`${game.name} ${game.id}`} value={game.id}>{game.name}</option>
//                     )
//                   })}  </select> </Item> 
//           </Grid>
//           <Grid item xs={6} md={3}>
//             {/* <Item> Liked Games <select id="owned-form1" className="form-control" onChange={e => setLikedGames({likedGame: e.target.value})}> {likedGames.map(likedGame => {
//                     return(
//                     <option id="owned-form1" key={likedGame.id}>{likedGame.name} </option>
//                     )
//                   })} </select> </Item> */}
//           </Grid>
//         </Grid>
//         </Box>
//          </div>




// if(data){
//         const map = {}
//         data.owned.forEach(game =>{ 
//           map[game.email] = game
//         }) //go through the game data and (forEach) means to create a bucket
//         // for(let i = 0; i < data.games.length; i++){//same thing as above
//         //   const game = data.games[i]
//         //   collectionOfGames[game.id] = game
//         // } == what forEach does. 
//         setCollectionOfGames(map)// we are taking this temporay bucket of games (map) and setting it equal to our variable collection of games to persitst the data over reRenders
//       } // 
//     },[data])

//     const handleChange = e =>{
//       console.log('event',e,  e.target.value, 'collectionOfGames', collectionOfGames)
//       const selectedGame = collectionOfGames[e.target.value]
//       setOwnedGame(selectedGame)
//     }

//     if(isLoading) {
//       return null
//     }
    
//     return (  
//     <div className="app-list">
//       <h1 className="Header">User Dashboard </h1>
//         <Box sx={{ flexGrow: 1 }}>
//          <Grid container spacing={5}> {/* space between Items in grid */}
//           <Grid item xs={6} md={5}>
//             <Item> Owned Games </Item> {/* xs = the height and md = the column space it takes up out of 12 */}
//             <Item> <select id="owned-form1" className="form-control" onChange={handleChange}>  {/* {ownedGames.map(ownedGame => { */}
//                     <option id="owned-form1" value="">Your Owned Games</option>
//                     {data.owned.map( game => {
//                     return (
//                       <option key={`${game.owned} ${game.email}`} value={game.email}>{game.owned}</option>
//                     )
//                   })}  </select> </Item> 
//           </Grid>
//           <Grid item xs={6} md={5}>
//             <Item> Favorite Games </Item> 
//              {/* <Item> Favorite Games <select id="owned-form1" className="form-control" onChange={e => setFavoriteGames({likedGame: e.target.value})}> {favoriteGames.map(favoriteGame => {
//                     return(
//                     <option key={`${game.name} ${game.id}`} value={game.id}>{game.name}</option> 
//                     )
//                   })} </select> </Item>  */}
//           </Grid>
//         </Grid>
//         </Box>
//          </div>

//     )

// }

// export default UserDashboard





//{/* <Item> 
                //{data.games.map( game => {
                    //return (
                     // <option key={`${game.image_url} `} value={game.bgaID}>{game.name} </option>
                    //) */}
//
