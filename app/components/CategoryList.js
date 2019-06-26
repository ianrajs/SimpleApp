import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  FlatList,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import styled from 'styled-components/native';

const iconLocation = require('./../asset/locationEmpty.png');
const screenWidth = Dimensions.get('window').width;

class CategoryList extends PureComponent {

  onPressListing = (item) => {
    const { navigation } = this.props;
    navigation.navigate('ListingDetail', item);
  }

  renderItem = (item, index) => {

    return (
      <Wrapper width={(screenWidth * 0.30)}>
        <ItemWrapper>
          <CategoryName>{item.name}</CategoryName>
        </ItemWrapper>
      </Wrapper>
    );
    
  }

  render() {
    const { data } = this.props;
    return (
      <Container>
        <FlatList
            flexDirection={'column'}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            renderItem={({ item, index }) => this.renderItem(item, index)}
            keyExtractor={ item => item.name}
            scrollEnabled={false}
            />
      </Container>
    );
  }
}

export default CategoryList;

const Container = styled.ScrollView`
  padding: 10px;
  flex-direction: row;
`;

const Wrapper = styled.View`
  width: ${props => props.width};
  height: 50px;
`;

const ItemWrapper = styled.View`
  width: 80%; 
  background: #1278CE;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 10px 0;
`;

const CategoryName = styled.Text`
  color: #fff;
  font-size: 13px;
`;