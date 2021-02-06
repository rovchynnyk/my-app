import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";

import Header from './components/Header';
import CarsList from './components/Cars/CarsList';
import Footer from './components/Footer';
import CarsProvider from "./components/CarsProvider";
import CarDetail from "./components/Cars/CarDetail";
import Favourites from "./components/Cars/Favourites";
import NotFound from "./components/NotFound";
import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <CarsProvider>
        <div className='App-layout'>
          <Switch>
            <Route 
              exact 
              component={CarsList} 
              path='/' 
            />

            <Route 
              component={CarDetail} 
              path='/detail/:id' 
            />

            <Route
              component={Favourites}
              path='/favourites'
            />

            <Route 
              component={NotFound} 
              path='*' 
            />
          </Switch>
        </div>
      </CarsProvider>

      <Footer />
    </Router>
  );
}

export default App;
