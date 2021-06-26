import './App.css';
import {Router} from '@reach/router';
import AllAuthors from './components/AllAuthors';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <AllAuthors default path = "/api/authors" />
      </Router>
    </div>
  );
}

export default App;
