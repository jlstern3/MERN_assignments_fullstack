import './App.css';
import {Router} from '@reach/router';
import AllAuthors from './components/AllAuthors';
import CreateAuthor from './components/CreateAuthor';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditAuthor from './components/EditAuthor';
import DeleteAuthor from './components/DeleteAuthor';



function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <AllAuthors default path = "/api/authors" />
        <CreateAuthor path = "/api/authors/new"/>
        <EditAuthor path = "/api/authors/:id/edit"/>

      </Router>
    </div>
  );
}

export default App;
