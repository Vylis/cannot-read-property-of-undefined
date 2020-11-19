import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home'
import MonsterList from './components/List/MonsterList'
import MonsterDetails from './components/List/MonsterDetails'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/MonsterList" component={MonsterList} />
        <Route path="/MonsterList/:id" component={MonsterDetails} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
