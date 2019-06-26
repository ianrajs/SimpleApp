import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import styled from 'styled-components/native';

const iconLocation = require('./../asset/locationEmpty.png');
const screenWidth = Dimensions.get('window').width;

class ListItem extends PureComponent {

  onPressListing = (item) => {
    const { navigation } = this.props;
    navigation.navigate('Detail', item);
  }

  renderItem = (item, index) => {

    return (
      <Wrapper width={(screenWidth * 0.50)}>
        <TouchableOpacity onPress={() => this.onPressListing(item)}>
          <SubWrapper index={index}>
              <ImageWrapper>
                <StyledImage
                  height={(screenWidth * 0.35)}
                  source={item.image}
                />
              </ImageWrapper>
              <ProductName numberOfLines={1}>{item.name}</ProductName>
              <Price>{(item.price)}</Price>
              <LocationWrapper>
                <LocationImage
                  source={iconLocation}
                />
                <Location numberOfLines={1}>{item.location}</Location>
              </LocationWrapper>
          </SubWrapper>
        </TouchableOpacity>
      </Wrapper>
    );
    
  }

  render() {
    const { data } = this.props;
    return (
      <Container>
        <FlatList
            numColumns={2}
            flexDirection="column"
            data={data}
            renderItem={({ item, index }) => this.renderItem(item, index)}
            keyExtractor={ item => item.name}
            scrollEnabled={false}
            />
      </Container>
    );
  }
}

export default ListItem;

const Container = styled.View`
  flex: 1;
`;

const Wrapper = styled.View`
  width: ${props => props.width};
`;

const SubWrapper = styled.View`
  margin-left: ${props => (props.index % 2 === 0 ? '10px' : '5px')};
  margin-right: ${props => (props.index % 2 !== 0 ? '10px' : '5px')};
  background-color: #ffffff;
  shadow-color: #ccc;
  shadow-offset: 0 3px;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 3;
  z-index: 3;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.View`
  align-items: center;
`;
const StyledImage = styled.Image`
  width: 100%;
  height: ${props => props.height};
  border-radius: 5px;
`;

const Price = styled.Text`
  color: rgb(250, 89, 29);
  font-size: 16px;
  font-weight: 600;
  margin: 0px 10px;
  width: 100%;
  padding-right: 10px;
  padding-bottom: 5px;
`;

const ProductName = styled.Text`
  color: rgb(49, 53, 59);
  font-size: 14px;
  font-weight: 500;
  margin: 15px 10px 0 10px;
  width: 100%;
  padding-right: 10px;
`;

const Location = styled.Text`
  color: rgb(49, 53, 59);
  font-size: 13px;
  font-weight: 500;
`;

const LocationWrapper = styled.View`
  flex-direction: row;
  padding-bottom: 10px;
  padding-left: 5px;
`;

const LocationImage = styled.Image`
  width: 20px;
  height: 15px;
  resize-mode: contain;
`;