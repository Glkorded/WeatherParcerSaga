import React from "react";
import SingleCitySearch from "./view/screens/WeatherSearch";
import { Route, Switch } from "react-router-dom";
import Navigation from "./view/layouts/Navigation";
import DetailedCitySearch from "./view/screens/CityWeatherSearch";
import Favourites from "./view/screens/Favourites";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  background: #edeef0;
  background-repeat: repeat;
  height: 947px;
  width: auto;
`;

const App = () => (
  <Background imgSrc={"../images/background.jpg"}>
    <Navigation />
    <Switch>
      <Route exact path="/" component={SingleCitySearch} />
      <Route path="/favourites/" exact component={Favourites} />
      <Route
        path="/detailed_search/:cityId"
        exact
        component={DetailedCitySearch}
      />
    </Switch>
  </Background>
);

export default App;
