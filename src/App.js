import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Cart, Home } from './Pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/Cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
