import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles/styles';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import CharacterDetailsPage from './components/CharacterDetailsPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CharacterList} />
          <Route path="/character/:id" component={CharacterDetailsPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
