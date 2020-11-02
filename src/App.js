import Main from './components/Main/Main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Main/>
      </Router>
    </div>
  );
}

export default App;
