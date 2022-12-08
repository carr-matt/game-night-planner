import React, {useState, useCallback} from 'react';
import './compy.css';
import { useGetGamesQuery } from '../app/api';
import { useGetMechanicQuery } from '../app/mechanics'
import { useGetCategoryQuery } from '../app/category'

// hard code min players, min time and max time and make it so they search through moneymaker
// for something greater than or equal to or less than or equal to




function SearchForm() {


    const {data: mechanicData , isLoading: isMechanicLoading } = useGetMechanicQuery();
    const {data: categroyData , isLoading: isCategoryLoading } = useGetCategoryQuery();

    let min_players = [
      {label: "1", value: "1"},
      {label: "2", value: "2"},
      {label: "3", value: "3"},
      {label: "4", value: "4"},
      {label: "5", value: "5"},
      {label: "6", value: "6"},
      {label: "7", value: "7"},
      {label: "8", value: "8"},
      {label: "9", value: "9"},
      {label: "10", value: "10"},

    ]

    let max_players = [
      {label: "4", value: "4"},
      {label: "5", value: "5"},
      {label: "6", value: "6"},
      {label: "7", value: "7"},
      {label: "8", value: "8"},
      {label: "9", value: "9"},
      {label: "10", value: "10"},
      {label: "11", value: "11"},
      {label: "12", value: "12"},
      {label: "13", value: "13"},
      {label: "14", value: "14"},
      {label: "15", value: "15"},

    ]

    let play_time = [
      {label: "15 minutes", value: "15"},
      {label: "30 minutes", value: "30"},
      {label: "45 minutes", value: "45"},
      {label: "1 hour", value: "60"},
      {label: "90 minutes", value: "90"},
      {label: "2 hours", value: "120"},
      {label: "3 hours", value: "180"},

    ]

    const [minAge, setMinAge] = useState("");
    const [minimum, setMinimum] = useState("Minumum Players")
    const [maximum, setMaximum] = useState("Maximum Players")
    const [playtime, setPlayTime] = useState("Play Time")
    const [category, setCategory] = useState("Category");
    const [mechanic, setMechanic] = useState("Mechanic");

    const handleMinimumChange = (event) => {
  setMinimum(event.target.value)
}
    const handleMaximumChange = (event) => {
  setMaximum(event.target.value)
}

    const handlePlayTimeChange = (event) => {
  setPlayTime(event.target.value)
}

      const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

      const handleMechanicChange = (event) => {
    setMechanic(event.target.value);
  }


  const { data: gameData , isLoading: isGameLoading } = useGetGamesQuery({
    min_players: minimum,
    max_players: maximum,
    max_playtime: playtime,
    min_age: minAge,
    mechanics: mechanic,
    categories: category
  });

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    // Do something with the gameData here...
  }, [gameData, minimum, maximum, playtime, minAge, mechanic, category]);

  if (isGameLoading) {
    return null}

  if (isMechanicLoading) {
    return null}

  if (isCategoryLoading) {
    return null}

  console.log(minAge, minimum, maximum, playtime, mechanic, category)

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
              <select onChange={handleMinimumChange} className="form-select">
                <option value="Minumum Players">Minimum Number of Players</option>
                {min_players.map((minimum) => <option key={minimum.label} value={minimum.value}>{minimum.label}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <select onChange={handleMaximumChange} className="form-select">
                <option value="Maximum Players">Maximum Number of Players</option>
                {max_players.map((maximum) => <option key={maximum.label} value={maximum.value}>{maximum.label}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <select onChange={handlePlayTimeChange} className="form-select">
                <option value="Play Time">Play Time</option>
                {play_time.map((playtime) => <option key={playtime.label} value={playtime.value}>{playtime.label}</option>)}
              </select>
                  </div>
                 <div className="mb-3">
                    <select onChange={handleMechanicChange} required name="mechanics" type="text" className="form-select">
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
                    <select onChange={handleCategoryChange} required name="category" type="text" className="form-select">
                      <option value="">Category</option>
                        {categroyData.categories?.map(category => {
                        return (
                            <option key={`${category.id}`} value={category.name}>{category.name}
                            </option>
                        )
                      })}

                    </select>
                  </div>
                  <button type="submit" className="form-button">Search</button>
                </form>
              </div>
            </div>
          </div>

    )
}

export default SearchForm
