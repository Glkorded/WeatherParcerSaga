import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SingleCity from "../layouts/WeatherInfo";
import {
  getItems,
  getInputInfo,
  getFilteredInfo,
  getFavouritesRequest,
  getInputRequest,
  Repository as FavouritesRepository
} from "../../modules/favourites";
import * as R from "ramda";
import styled from "styled-components";

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
  left: calc(50% - 228px);
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

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.props.getFavouritesRequest();
    this.setState({ data: FavouritesRepository.getFavourites() });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.data !== prevState.data) {
      FavouritesRepository.setFavourites(this.state.data);
    }
  }

  handleChange = e => {
    this.props.getInputRequest(e.target.value);
  };

  render() {
    return (
      <Wrapper>
        <Title>FAVOURITES</Title>
        <SubTitle>Feel free to work with your favourited cities!</SubTitle>
        <Input onChange={this.handleChange} className="input" />
        <div>
          {this.state.data.map((single, index) => (
            <div key={single.woeid}>
              <DataLink to={`../detailed_search/${single.woeid}`}>
                {single.title}
              </DataLink>
              <SingleCity
                key={single.woeid}
                location_type={single.location_type}
                latt_long={single.latt_long}
                buttonName="Unfavourite me!"
                buttonDisabled={false}
                handleFavourite={() => {
                  const semiData = this.state.data.slice();
                  semiData.splice(index, 1);
                  this.setState({ data: semiData });
                }}
              />
            </div>
          ))}
        </div>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  getFavouritesRequest,
  getInputRequest
};

export default connect(
  R.applySpec({
    items: getItems,
    inputInfo: getInputInfo,
    filteredInfo: getFilteredInfo
  }),
  mapDispatchToProps
)(Favourites);
