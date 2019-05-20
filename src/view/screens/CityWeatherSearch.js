import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchCityWeatherRequest,
  getCityIsLoading,
  getCityWeatherInfo,
  setIsLoading
} from "../../modules/cityWeather";
import DetailedCity from "../layouts/CityWeatherInfo";
import * as R from "ramda";
import styled from "styled-components";

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

const DetailedCitySearch = props => {
  useEffect(() => {
    props.fetchCityWeatherRequest(props.match.params.cityId);
    props.setIsLoading(true);
  }, []);

  const { isLoading, cityWeatherInfo } = props;
  return (
    <div>
      {!isLoading ? (
        <Table>
          {cityWeatherInfo.map(detailed => (
            <DetailedCity
              data-testid="lkdasjflkdsajfldska"
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
};

const mapDispatchToProps = {
  fetchCityWeatherRequest,
  setIsLoading
};

export default connect(
  R.applySpec({
    isLoading: getCityIsLoading,
    cityWeatherInfo: getCityWeatherInfo
  }),
  mapDispatchToProps
)(DetailedCitySearch);
