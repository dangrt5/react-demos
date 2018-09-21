import React from "react";
import {
  Route,
  Link
} from "react-router-dom";
import SpiderMan1 from "./spiderman1";
import SpiderMan2 from "./spiderman2";

export default () => {
  return (
    <div>
      <h1>This is the articles for the movies page</h1>
      <Link to="/articles/spiderman1">Spider Man 1</Link>
      <Link to="/articles/spiderman2">Spider Man 2</Link>
      <Route path="/articles/spiderman1" component={SpiderMan1}/>
      <Route path="/articles/spiderman2" component={SpiderMan2}/>
    </div>
  )
}
