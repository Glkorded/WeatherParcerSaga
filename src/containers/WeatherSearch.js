import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeatherRequest } from "../actions";
import SingleCity from "../components/WeatherInfo";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DataLink = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  font-family: "KoHo", sans-serif;
  text-decoration: none;
  color: #c88c32;
`;
const Title = styled.h1`
  position: sticky;
  margin: 0px;
  color: gray;
  font-weight: bold;
  font-family: "KoHo", sans-serif;
  text-align: center;
  top: 0px;
  z-index: 1;
  background: #edeef0;
`;

const SubTitle = styled.h2`
  position: sticky;
  margin: 0px;
  color: gray;
  font-weight: bold;
  font-family: "KoHo", sans-serif;
  text-align: center;
  top: 41px;
  z-index: 1;
  background: #edeef0;
`;

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  left: calc(50% - 584px);
  flex-direction: column;
  text-align: center;
  height: calc(100% - 61px);
  overflow: auto;
`;

const Input = styled.input`
  position: sticky;
  top: 72px;
  z-index: 1;
  background: #edeef0;
`;

class SingleCitySearch extends Component {
  constructor(props) {
    super(props);
    this.state = { inputField: "City", favourites: [] };
  }

  handleChange = e => {
    this.props.getWeatherRequest(e.target.value);
  };

  disabledCheckFunc = elem => {
    if (this.state.favourites !== null) {
      return this.state.favourites.map(e => e.woeid).some(el => el === elem);
    }
  }; //Function to check whether city is favourited

  componentDidMount() {
    this.props.getWeatherRequest("San");

    if (JSON.parse(localStorage.getItem("favouriteData")) !== null) {
      this.setState({
        favourites: JSON.parse(localStorage.getItem("favouriteData"))
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.inputField !== prevState.inputField) {
    //}
    if (this.state.favourites !== prevState.favourites) {
      localStorage.setItem(
        "favouriteData",
        JSON.stringify(this.state.favourites)
      ); //Here we set favourites to localStorage
    }
  }

  render() {
    const { isLoading, weatherInfo } = this.props;
    return (
      <Wrapper>
        <Title>SEARCH</Title>
        <SubTitle>
          Feel free to search weather in biggest cities in the world! Clicking
          on the title will provide detailed information!
        </SubTitle>
        <Input
          placeholder="Search..."
          onChange={this.handleChange}
          className="input"
        />
        {!isLoading ? (
          <div>
            {weatherInfo.map(single => (
              <div key={single.woeid}>
                <DataLink to={`../detailed_search/${single.woeid}`}>
                  {single.title}
                </DataLink>
                <SingleCity
                  key={single.woeid}
                  location_type={single.location_type}
                  latt_long={single.latt_long}
                  buttonName="Favourite me!"
                  buttonDisabled={this.disabledCheckFunc(single.woeid)}
                  handleFavourite={() => {
                    const semiData = this.state.favourites.slice();
                    semiData.push(single);
                    this.setState({ favourites: semiData });
                    console.log(`${single.title} was added to favourites`);
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <p>Loading…</p>
        )}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.weather.isLoading,
    weatherInfo: state.weather.weatherInfo
  };
};

const mapDispatchToProps = {
  getWeatherRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCitySearch);
