import React from 'react';
import "./Home.css";
import Row from "./Row";
import requests from './requests';

function Home() {
    return (
        <div className ="home">
            <div className="home__container">
                
                <img 
                className='home__image'
                src="https://www.whats-on-netflix.com/wp-content/uploads/2018/11/doctor-strange-leaving-netflix-2018.jpg.webp" 
                alt=""
                />
            </div>
            
            <div className="row__app">
                <Row title=" UPCOMING STRANGES" fetchUrl={requests.fetchNetflixOriginals} />
                <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
                <Row title="Future Possibilities" fetchUrl={requests.fetchTopRated} />
                <Row title="World Future" fetchUrl={requests.fetchActionMovies} />
                <Row title=" Earth Future" fetchUrl={requests.fetchComedyMovies} />
                <Row title=" People Documentaries" fetchUrl={requests.fetchDocumentaries} />
                <Row title=" Blunder Past" fetchUrl={requests.fetchHorrorMovies} />
                
            </div>
        </div>
    );
}

export default Home;
