import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Details page */}
        <Route path="/details/:id" exact>
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
        <Route path="/form" exact>
          <MovieList />
        </Route>
      </Router>
    </div>
  );
}

export default App;
