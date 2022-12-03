//will need use effect to get the data for the filters
import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { useGetRandomQuery } from '../app/randomApi';
import { useParams } from "react-router-dom";




function MainPage() {

   const { data, isLoading } = useGetRandomQuery();
   console.log(data)


   if (isLoading) {
    return null}



  return (
    <div>
        <h1>Game Night Planner</h1>
        <h2>Never wonder what game you'll play next again!</h2>
        <br/>
        <div className="container">
        <div className="row mt-5">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h2>Random Game</h2>
              </div>
              <div className="card-body">
                <table>
                  <tbody>
                    {data.games?.map(randomGame => (
                      <tr key={randomGame.id}>
                        <td>
                          <a href={randomGame.image_url} />
                        </td>
                        <td>
                          {randomGame.name}
                        </td>
                        <td>
                          {randomGame.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>


        {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cf.geekdo-images.com/9nGoBZ0MRbi6rdH47sj2Qg__opengraph/img/ol4aoxymd2wCRep9sMujnrx9n_s=/fit-in/1200x630/filters:strip_icc()/pic5786795.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="slide-label">Monopoly</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.boardgamequest.com/wp-content/uploads/2013/04/Settlers-of-Catan.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="slide-label">Settlers of Catan</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cf.geekdo-images.com/c4S2XDRb_DCYCAV-ZAzDpg__opengraph/img/J3e9QE8R-Jc9-Njtj0Mpoh4oT4I=/fit-in/1200x630/filters:strip_icc()/pic288405.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="slide-label">Life</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
{/* </div> */}
</div>
  );
}

export default MainPage;
