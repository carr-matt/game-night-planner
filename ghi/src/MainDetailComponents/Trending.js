import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useGetCarouselQuery } from '../app/carouselApi';
import './MainPage.css';
import Container from 'react-bootstrap/esm/Container';

function Trending() {
  const { data: carouselData, isLoading: carouselIsLoading } =
    useGetCarouselQuery();

  if (carouselIsLoading) {
    return null;
  }

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <React.Fragment>
      <Container className="popular-game-carousel">
        <div className="card bg-dark">
          <h1>Trending Games of the Week</h1>
          <Carousel style={{ width: '100%' }}>
            {carouselData.games?.map((popularGames) => (
              <Carousel.Item key={popularGames.id}>
                <div>
                  <h4 className="game-title"> {popularGames.name} </h4>
                  <div
                  // style={{display: "flex"}}
                  >
                    <span
                      className="m-2"
                      style={{ width: '100%' }}
                    >
                      <img
                        className="d-block"
                        src={popularGames.image_url}
                        onClick={() =>
                          openInNewTab(
                            `${process.env.PUBLIC_URL}/detail/${popularGames.id}`
                          )
                        }
                        alt="carousel-images"
                        style={{
                          objectFit: 'contain',
                          width: '50%',
                          height: '40%',
                        }}
                      />
                    </span>
                  </div>
                </div>
              </Carousel.Item>
            ))}
            ;
          </Carousel>
        </div>
      </Container>
    </React.Fragment>
  );
}
export default Trending;
