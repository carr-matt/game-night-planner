import React from 'react';
import './compy.css';
import { useGetGamesQuery } from '../app/api';
import { useGetMechanicQuery } from '../app/mechanics'

// hard code min players, min time and max time and make it so they search through moneymaker
// for something greater than or equal to or less than or equal to




function SearchForm() {


    const { data: gameData , isLoading: isGameLoading } = useGetGamesQuery();
    const {data: mechanicData , isLoading: isMechanicLoading } = useGetMechanicQuery();
    console.log(gameData, mechanicData)


   if (isGameLoading) {
    return null}

  if (isMechanicLoading) {
    return null}


    return (

              <div className="row" >
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1 className="header-title">Search Form</h1>
                <form id="search-form">
                 <div className="mb-3">
                    <select required name="minimum-age" type="text" className="form-select">
                      <option value="">Minimum Age</option>
                    </select>
                  </div>
                 <div className="mb-3">
                    <select required name="price" type="text" className="form-select">
                      <option value="">Price</option>
                    </select>
                  </div>
                 <div className="mb-3">
                    <select required name="number-of-players" type="text" className="form-select">
                      <option value="">Number of Players</option>
                    </select>
                  </div>
                 <div className="mb-3">
                    <select required name="play-time" type="text" className="form-select">
                      <option value="">Play Time</option>
                      {gameData.games?.map(playtime => {
                        return (
                            <option key={`${playtime.min_playtime}, ${playtime.id}`} value={playtime.id}>{playtime.min_playtime}
                            </option>
                        )
                      })}
                    </select>
                  </div>
                 <div className="mb-3">
                    <select required name="mechanics" type="text" className="form-select">
                      <option value="">Mechanics</option>
                      {gameData.games.mechanics?.map(mechanic => {
                        return (
                            <option key={`${gameData.mechanic}`} value={gameData.mechanic}>
                            </option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="mb-3">
                    <select required name="category" type="text" className="form-select">
                      <option value="">Category</option>
                        {gameData.games.categories?.map(category => {
                        return (
                            <option key={category} value={category}>
                            </option>
                        )
                      })}

                    </select>
                  </div>
                  <button className="btn btn-secondary">Search</button>
                </form>
              </div>
            </div>
          </div>

    )
}

export default SearchForm
