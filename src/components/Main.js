import React from "react";
import { Switch, Route } from "react-router-dom";
import { MainWrapper } from "../styledComponents";
import TopStories from "./TopStories";
import Schedule from "./Test2";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <MainWrapper>
    <Switch>
      <Route path="/new" component={Schedule} />
      <Route path="/top" component={Schedule} />
      <Route path="/story/:id" component={Schedule} />
      <Route exact path="/" component={TopStories} />
    </Switch>
  </MainWrapper>
);

export default Main;
