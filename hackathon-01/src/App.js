import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/map" component={Map} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
