import React, { Component } from 'react';
import styled from 'styled-components/native'

import ListItem from './components/ListItem';
import CategoryList from './components/CategoryList';
import laptopImage from './asset/laptop.png';
import tvImage from './asset/tv.jpg';
import kipasImage from './asset/kipas.jpg';
import kulkasImage from './asset/kulkas.jpg';
import cat1 from './asset/cat1.png';

const itemData = [
  {
    name: 'Laptop Lenovo', 
    image: laptopImage,
    price: 'Rp. 10.000.000',
    location: 'Jakarta',
  },
  {
    name: 'TV Led SHARP 24"', 
    image: tvImage,
    price: 'Rp. 5.000.000',
    location: 'Jakarta',
  },
  {
    name: 'Kipas Angin', 
    image: kipasImage,
    price: 'Rp. 1.000.000',
    location: 'Jakarta',
  },
  {
    name: 'Kulkas Portable GEA', 
    image: kulkasImage,
    price: 'Rp. 5.000.000',
    location: 'Jakarta',
  },
]

const CategoryData = [
  {
    name: 'Electronik', 
    image: cat1,
  },
  {
    name: 'Fashion', 
    image: cat1,
  },
  {
    name: 'Software', 
    image: cat1,
  },
  {
    name: 'Otomotive', 
    image: cat1,
  },
  {
    name: 'Food', 
    image: cat1,
  },
  {
    name: 'Gadget', 
    image: cat1,
  },
]

export default class Home extends Component {
  componentDidMount() {}

  render() {
    const { navigation } = this.props;
    return (
      <Container style={{ flex: 1 }}>
        <CategoryList data={CategoryData}/>
        <ListItem
          data={itemData}
          navigation={navigation}
        />
      </Container>
    );
  }
} 

const Container = styled.ScrollView`
  flex: 1;
`;

const StyledText = styled.Text`

`;
