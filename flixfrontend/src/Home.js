import React from 'react';
import "./Home.css";
import Row from "./Row";
import requests from './requests';

function Home() {
    return (
        <div className="home">
            
            <div className="home__container">
                
                <img 
                className='home__image'
                src="https://www.whats-on-netflix.com/wp-content/uploads/2018/11/doctor-strange-leaving-netflix-2018.jpg.webp" 
                alt=""
                />
            </div>
            
            <div className="row__app">
            <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
                
            </div>
        </div>
    );
}

export default Home;
