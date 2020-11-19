import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route to="/" component={Home} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
