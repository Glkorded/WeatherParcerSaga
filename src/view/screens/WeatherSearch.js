import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  getFavouritesRequest,
  setFavouritesRequest,
  getItems,
} from '../../modules/favourites/'
import SingleCity from '../commons/WeatherInfo'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as R from 'ramda'
import {
  fetchWeatherIsLoading,
  fetchWeatherRequest,
  setIsLoading,
  fetchWeatherItems,
} from '../../modules/weather'

const DataLink = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  font-family: 'KoHo', sans-serif;
  text-decoration: none;
  color: #c88c32;
`
const Title = styled.h1`
  position: sticky;
  margin: 0px;
  color: gray;
  font-weight: bold;
  font-family: 'KoHo', sans-serif;
  text-align: center;
  top: 0px;
  z-index: 1;
  background: #edeef0;
`

const SubTitle = styled.h2`
  position: sticky;
  margin: 0px;
  color: gray;
  font-weight: bold;
  font-family: 'KoHo', sans-serif;
  text-align: center;
  top: 41px;
  z-index: 1;
  background: #edeef0;
`

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  left: calc(50% - 584px);
  flex-direction: column;
  text-align: center;
  height: calc(100% - 61px);
  overflow: auto;
`

const Input = styled.input`
  position: sticky;
  top: 72px;
  z-index: 1;
  background: #edeef0;
`

const SingleCitySearch = props => {
  const { isLoading, weatherInfo, fetchWeatherRequest, setIsLoading, reducerFavourites } = props

  const [favourites, setFavourites] = useState([])


  const handleChange = e => {
    fetchWeatherRequest(e.target.value)
  }

  const disabledCheckFunc = elem => {
    if (favourites !== null) {
      return favourites.map(e => e.woeid).some(el => el === elem)
    }
  } //Function to check whether city is favourited

  useEffect(() => {
    fetchWeatherRequest('San')
    setIsLoading(true)
    if (reducerFavourites !== null) {
      setFavourites(reducerFavourites)
    }
  }, [])

  useEffect(() => {
    setFavouritesRequest(favourites)
  }, [favourites])


  return (
    <Wrapper>
      <Title>SEARCH</Title>
      <SubTitle>
        Feel free to search weather in biggest cities in the world! Clicking on
        the title will provide detailed information!
      </SubTitle>
      <Input
        placeholder="Search..."
        onChange={handleChange}
        className="input"
      />
      {isLoading ? (
        <p>Loading…</p>
      ) : (
        <div>
        {weatherInfo.map(single => (
            <div key={single.woeid}>
              <DataLink
                data-testid="datalink"
                to={`../detailed_search/${single.woeid}`}
              >
                {single.title}
              </DataLink>
              <SingleCity
                key={single.woeid}
                location_type={single.location_type}
                latt_long={single.latt_long}
                buttonName="Favourite me!"
                buttonDisabled={disabledCheckFunc(single.woeid)}
                handleFavourite={() => {
                  const semiData = [...favourites]
                  semiData.push(single)
                  setFavourites(semiData)
                  console.log(`${single.title} was added to favourites`)
                }}
              />
            </div>
          ))}
        </div>)}
    </Wrapper>
  )
}

export default connect(
  R.applySpec({
    isLoading: fetchWeatherIsLoading,
    weatherInfo: fetchWeatherItems,
    reducerFavourites: getItems,
  }),
  {
    fetchWeatherRequest,
    getFavouritesRequest,
    setFavouritesRequest,
    setIsLoading,
  },
)(SingleCitySearch)
