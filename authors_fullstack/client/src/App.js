import './App.css';
import {Router} from '@reach/router';
import AllAuthors from './components/AllAuthors';
import CreateAuthor from './components/CreateAuthor';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <AllAuthors default path = "/api/authors" />
        <CreateAuthor path = "/api/authors/new"/>
      </Router>
    </div>
  );
}

export default App;
