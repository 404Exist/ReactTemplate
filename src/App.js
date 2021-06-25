import React , { Component } from 'react';
import { BrowserRouter , Route , Switch , Redirect} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar'
import Index from './components/Index'
import Contact from './components/Contact'
import Footer from './components/Footer'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/contact" component={Contact}/>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
