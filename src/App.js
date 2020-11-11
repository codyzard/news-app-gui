import Main from './components/Main/Main'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import FacebookProvider from 'react-facebook/dist/FacebookProvider';
function App() {
  return (
    <div className="App">
      <Router>
        <FacebookProvider appId="719809908959963">
          <Main/>
        </FacebookProvider>
      </Router>
    </div>
  );
}

export default App;
