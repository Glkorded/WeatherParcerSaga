import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SingleCity from '../commons/WeatherInfo'
import {
  getItems,
  getInputInfo,
  getFilteredInfo,
  getFavouritesRequest,
  setFavouritesRequest,
  setInput,
} from '../../modules/favourites'
import * as R from 'ramda'
import styled from 'styled-components'

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
  left: calc(50% - 228px);
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

const Favourites = props => {
  const [data, setData] = useState([])

  useEffect(() => {
    props.getFavouritesRequest()
    setData(props.items)
  }, [])

  useEffect(() => {
    props.setFavouritesRequest(data)
  }, [data])

  const handleChange = e => {
    //just add to the store
    props.setInput(e.target.value)
  }

  return (
    <Wrapper>
      <Title>FAVOURITES</Title>
      <SubTitle>Feel free to work with your favourited cities!</SubTitle>
      <Input onChange={handleChange} className="input" />
      <div>
        {props.filteredInfo.map((single, index) => (
          <div key={single.woeid}>
            <DataLink
              data-testid="singleFavouritedCity"
              to={`../detailed_search/${single.woeid}`}
            >
              {single.title}
            </DataLink>
            <SingleCity
              key={single.woeid}
              location_type={single.location_type}
              latt_long={single.latt_long}
              buttonName="Unfavourite me!"
              buttonDisabled={false}
              handleFavourite={() => {
                const semiData = data.slice()
                semiData.splice(index, 1)
                setData(semiData)
              }}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

const mapDispatchToProps = {
  getFavouritesRequest,
  setFavouritesRequest,
  setInput,
}

export default connect(
  R.applySpec({
    items: getItems,
    inputInfo: getInputInfo,
    filteredInfo: getFilteredInfo,
  }),
  mapDispatchToProps,
)(Favourites)
