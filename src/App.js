import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <div className='banner__fade' />
      <Row title='Netflix Original' fetchurl={requests.fetchNetflixOriginal} islarge={true} />
      <Row title='Trending Now' fetchurl={requests.fetchTrending} islarge={true} />
      <Row title='Top Rated' fetchurl={requests.fetchTopRated} islarge={true} />
      <Row title='Action Movies' fetchurl={requests.fetcActionMovies} islarge={true} />
      <Row title='Comedy Movies' fetchurl={requests.fetcComedyMovies} islarge={true} />
      <Row title='Horror Movies' fetchurl={requests.fetcHorrorMovies} islarge={false} />
      <Row title='Romance Movies' fetchurl={requests.fetcRomanceMovies} islarge={true} />
      <Row title='Documentaries' fetchurl={requests.fetcDocumentMovies} islarge={false}/>
      {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt aperiam voluptates culpa, vero non asperiores qui repellat similique nobis nemo accusamus, eos rerum explicabo voluptate distinctio doloribus, totam quod?</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt aperiam voluptates culpa, vero non asperiores qui repellat similique nobis nemo accusamus, eos rerum explicabo voluptate distinctio doloribus, totam quod?</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt aperiam voluptates culpa, vero non asperiores qui repellat similique nobis nemo accusamus, eos rerum explicabo voluptate distinctio doloribus, totam quod?</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt aperiam voluptates culpa, vero non asperiores qui repellat similique nobis nemo accusamus, eos rerum explicabo voluptate distinctio doloribus, totam quod?</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt aperiam voluptates culpa, vero non asperiores qui repellat similique nobis nemo accusamus, eos rerum explicabo voluptate distinctio doloribus, totam quod?</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt aperiam voluptates culpa, vero non asperiores qui repellat similique nobis nemo accusamus, eos rerum explicabo voluptate distinctio doloribus, totam quod?</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt aperiam voluptates culpa, vero non asperiores qui repellat similique nobis nemo accusamus, eos rerum explicabo voluptate distinctio doloribus, totam quod?</h1> */}
    </div>
  );
}

export default App;
