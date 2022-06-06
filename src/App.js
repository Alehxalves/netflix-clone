import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './utils/requests';

import './App.css';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner />
      <Row 
        title="Netflix Originals" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <footer className='footer'>
        <h1>This is a demo Netflix app</h1>
        <p style={{fontSize: ".8rem", paddingBottom: "8px"}}>Created by Alex Alves</p>
      </footer>
    </div>
  );
}

export default App;
