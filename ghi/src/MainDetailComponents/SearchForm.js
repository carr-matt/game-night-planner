import React, {useState, useCallback} from 'react';
import './compy.css';
import { useGetGamesQuery } from '../app/api';
import { useGetMechanicQuery } from '../app/mechanics'
import { useGetCategoryQuery } from '../app/category'



function SearchForm() {


    // const {data: mechanicData , isLoading: isMechanicLoading } = useGetMechanicQuery();
    // const {data: categoryData , isLoading: isCategoryLoading } = useGetCategoryQuery();

    let min_players = []
      for (let i = 1; i <= 10; i++) {
        min_players.push({label: Number(i), value: Number(i)})
      }

    let max_players = []
      for (let i = 4; i <= 15; i++) {
        max_players.push({label: Number(i), value: Number(i)})
      }

    let play_time = [
      {label: "15 minutes", value: 16},
      {label: "30 minutes", value: 31},
      {label: "45 minutes", value: 46},
      {label: "1 hour", value: 61},
      {label: "90 minutes", value: 91},
      {label: "2 hours", value: 121},
      {label: "3 hours", value: 181},

    ]

    const [minAge, setMinAge] = useState(0);
    const [minimum, setMinimum] = useState(0)
    const [maximum, setMaximum] = useState(10000)
    const [playtime, setPlayTime] = useState(100000)
    // const [category, setCategory] = useState();
    // const [mechanic, setMechanic] = useState();
    const [searched, setSearched] = useState([])

    const handleMinimumChange = (event) => {
  setMinimum(event.target.value)
}
    const handleMaximumChange = (event) => {
  setMaximum(event.target.value)
}

    const handlePlayTimeChange = (event) => {
  setPlayTime(event.target.value)
}

  //     const handleCategoryChange = (event) => {
  //   setCategory(event.target.value);
  // }

  //     const handleMechanicChange = (event) => {
  //   setMechanic(event.target.value);
  // }



  // const { data: gameData , isLoading: isGameLoading } = useGetGamesQuery();

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8000/bga/money_maker?gt_min_players=${minimum}&lt_max_players=${maximum}&gt_min_age=${minAge}&lt_max_playtime=${playtime}`);
    const data = await response.json();
    setSearched(data);
    console.log(data)
  };

//   function renderGameData(gameData) {
//   if (!searched) {
//     return (
//       <div>
//         No game data to display
//       </div>
//     );
//   } else {

//   return (
//     <div className="results-container">
//         {gameData.games?.map((game) => {
//           if ((minimum === null || game.min_players >= minimum) &&
//           (maximum === null || game.max_players <= maximum) &&
//           (playtime === null || game.max_playtime <= playtime) &&
//           (minAge === null || game.min_age >= minAge) &&
//           (mechanic === null || game.mechanics === mechanic) &&
//           (category === null || game.categories === category)) {
//             return (
//               <div key={game.id}>
//                 <h2>{game.name}</h2>
//                 <p>{game.description}</p>
//                 <img src={game.img_url} />
//               </div>
//             );
//           }
//         })}
//       </div>
//   );}
// }
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearched(true)
    console.log(event)
    // console.log(gameData)
    fetchData();
  }


  // if (isGameLoading) {
  //   return null}

  // if (isMechanicLoading) {
  //   return null}

  // if (isCategoryLoading) {
  //   return null}

  console.log(minAge, minimum, maximum, playtime)

    return (

      <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1 className="header-title">Search Form</h1>
          <form id="search-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="number" className="form-input" placeholder="Minimum Age" value={minAge}
                     onChange={(event) => setMinAge(event.target.value)} />
            </div>
            <div className="mb-3">
              <select onChange={handleMinimumChange} className="form-select" defaultValue="Minimum Players">
                <option value="Minumum Players">Minimum Number of Players</option>
                {min_players.map((minimum) => <option key={minimum.label} value={minimum.value}>{minimum.label}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <select onChange={handleMaximumChange} className="form-select" defaultValue="Maximum Players">
                <option value="Maximum Players">Maximum Number of Players</option>
                {max_players.map((maximum) => <option key={maximum.label} value={maximum.value}>{maximum.label}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <select onChange={handlePlayTimeChange} className="form-select" defaultValue="Play Time">
                <option value="Play Time">Play Time</option>
                {play_time.map((playtime) => <option key={playtime.label} value={playtime.value}>{playtime.label}</option>)}
              </select>
                  </div>
                 {/* <div className="mb-3">
                    <select onChange={handleMechanicChange} required name="mechanics" type="text" className="form-select" defaultValue="Mechanics">
                      <option value="">Mechanics</option>
                      {mechanicData.mechanics?.map(mechanic => {
                        return (
                            <option key={`${mechanic.id}`} value={mechanic.name}>{mechanic.name}
                            </option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="mb-3">
                    <select onChange={handleCategoryChange} required name="category" type="text" className="form-select" defaultValue="Category">
                      <option value="">Category</option>
                        {categoryData.categories?.map(category => {
                        return (
                            <option key={`${category.id}`} value={category.name}>{category.name}
                            </option>
                        )
                      })}

                    </select>
                  </div> */}
                  <button type="submit" className="form-button" onClick={handleSubmit}>Search</button>
                </form>
              </div>
              <div>
                    {searched.games?.map(game => (
                      <div key={game.id}>

                        <img src={game.image_url} className="random-img" alt="..." />
                        <div className="card-body">
                         <h3 className="card-title"> {game.name} </h3>
                         <h5 className="card-body"> {game.description_preview} </h5>
                      </div>
                  </div>))}
            </div>
    </div>
    </div>

  );

}

export default SearchForm
