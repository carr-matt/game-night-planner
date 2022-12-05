import React from 'react';
import './compy.css';

function SearchForm() {
    return (

              <div className="row" >
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1 className="header-title">Search Form</h1>
                <form id="search-form">
                 <div className="mb-3">
                    <select required name="age-range" type="text" className="form-select">
                      <option value="">Age Range</option>
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
                    </select>
                  </div>
                 <div className="mb-3">
                    <select required name="ratings" type="text" className="form-select">
                      <option value="">Ratings</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <select required name="genre" type="text" className="form-select">
                      <option value="">Genre</option>
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
