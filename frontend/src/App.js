import React from "react"
import Home from "./pages/Home";
import Article from "./pages/Article";

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "./styles/index.css";


const App = () => {
     return (
               <BrowserRouter>
                    <Switch>
                         <Route path="/article/:slug">
                        <Article />
                    </Route>
                    <Route path="/">
                          <Home />
                    </Route>
                    </Switch>
               </BrowserRouter>
                
                )
               
}

export default App;