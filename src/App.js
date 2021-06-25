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
          <Route path="/ReactTemplate" component={Index}/>
          <Route path="/ReactTemplate/contact" component={Contact}/>
          <Redirect to="/ReactTemplate" />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
