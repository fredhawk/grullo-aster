import * as React from 'react';
import { Router } from '@reach/router';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MovieSearchList } from './components/MovieSearchList';
import { DetailView } from './components/DetailView';
import './styles.css';

export function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Router>
          <MovieSearchList path="/" />
          <DetailView path=":movieid" />
        </Router>
      </main>
      <Footer />
    </div>
  );
}
