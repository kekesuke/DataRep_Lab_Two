import React from 'react';
import './App.css';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">MyApp</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route path='/' component={Content} exact></Route>
            <Route path='/read' component={Header} exact></Route>
            <Route path='/create' component={Footer} exact></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
