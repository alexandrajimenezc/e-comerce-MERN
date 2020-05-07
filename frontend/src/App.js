import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Register from './containers/User/Register/Register';
import Login from './containers/User/Login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/register" component={Register} exact/>
          <Route path="/login" component={Login} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
