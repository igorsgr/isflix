import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './index.css';

import Home from './pages/home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import PaginaNaoEncontrada from './pages/404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
       <Route path="/cadastro/video" component={CadastroVideo} />
       <Route path="/cadastro/categoria" component={CadastroCategoria} />
       <Route path="/" component={Home} exact />
       <Route component={PaginaNaoEncontrada} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);