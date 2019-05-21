import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  fetchCityWeatherRequest,
  getCityIsLoading,
  getCityWeatherInfo,
  setIsLoading,
} from '../../../modules/cityWeather'
import DetailedCity from './CityWeatherInfo'
import * as R from 'ramda'
import styled from 'styled-components'

const Table = styled.table`
  display: flex;
  position: absolute;
  left: calc(50% - 356px);
  top: calc(50% - 250px);
  flex-direction: column;
  background: #fffefe;
  width: 762px;
  border: 4px solid gray;
`

const DetailedCitySearch = props => {
  useEffect(() => {
    props.fetchCityWeatherRequest(props.match.params.cityId)
    props.setIsLoading(true)
  }, [])

  const { isLoading, cityWeatherInfo } = props
  return (
    <div>
      {!isLoading ? (
        <Table>
          {cityWeatherInfo.map(detailed => (
            <DetailedCity
              key={detailed.id}
              {...detailed}
            />
          ))}
        </Table>
      ) : (
        'Loading'
      )}
    </div>
  )
}

const mapDispatchToProps = {
  fetchCityWeatherRequest,
  setIsLoading,
}

export default connect(
  R.applySpec({
    isLoading: getCityIsLoading,
    cityWeatherInfo: getCityWeatherInfo,
  }),
  mapDispatchToProps,
)(DetailedCitySearch)
