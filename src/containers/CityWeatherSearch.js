import React, { Component } from "react";
import { connect } from "react-redux";
import { getCityWeatherRequest } from "../modules/cityWeather/actions";
import DetailedCity from "../components/CityWeatherInfo";
import styled from "styled-components";
import * as R from "ramda";
import { getCityIsLoading, getCityWeatherInfo } from "../selectors";

const Table = styled.table`
  display: flex;
  position: absolute;
  left: calc(50% - 356px);
  top: calc(50% - 250px);
  flex-direction: column;
  background: #fffefe;
  width: 762px;
  border: 4px solid gray;
`;

class DetailedCitySearch extends Component {
  componentDidMount() {
    this.props.getCityWeatherRequest(this.props.match.params.cityId);
  }

  render() {
    const { isLoading, cityWeatherInfo } = this.props;
    return (
      <div>
        {!isLoading ? (
          <Table>
            {cityWeatherInfo.map(detailed => (
              <DetailedCity
                key={detailed.id}
                applicable_date={detailed.applicable_date}
                weather_state_name={detailed.weather_state_name}
                weather_state_abbr={detailed.weather_state_abbr}
                wind_speed={detailed.wind_speed}
                wind_direction={detailed.wind_direction}
                min_temp={detailed.min_temp}
                the_temp={detailed.the_temp}
                max_temp={detailed.max_temp}
              />
            ))}
          </Table>
        ) : (
          "Loading"
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  getCityWeatherRequest
};

export default connect(
  R.applySpec({
    isLoading: getCityIsLoading,
    cityWeatherInfo: getCityWeatherInfo
  }),
  mapDispatchToProps
)(DetailedCitySearch);
