import React, { Component } from 'react';
import styled from 'styled-components/native'

import ListItem from './components/ListItem';
import CategoryList from './components/CategoryList';
import laptopImage from './asset/laptop.png';
import tvImage from './asset/tv.jpg';
import kipasImage from './asset/kipas.jpg';
import kulkasImage from './asset/kulkas.jpg';

const itemData = [
  {
    name: 'Laptop Lenovo GEA RS-06DR Gaming RS06DR', 
    image: laptopImage,
    price: 'Rp. 10.000.000',
    location: 'Jakarta',
  },
  {
    name: 'TV Led SHARP 24" 4K ULTRA HD Amoled', 
    image: tvImage,
    price: 'Rp. 5.000.000',
    location: 'Jakarta',
  },
  {
    name: 'Kipas Angin Portable Murah Meriah', 
    image: kipasImage,
    price: 'Rp. 1.000.000',
    location: 'Jakarta',
  },
  {
    name: 'Kulkas Portable GEA RS-06DR Mini Bar Soft Drink Cabinet RS06DR', 
    image: kulkasImage,
    price: 'Rp. 5.000.000',
    location: 'Jakarta',
  },
]

const CategoryData = [
  { name: 'Electronik' },
  { name: 'Fashion' },
  { name: 'Otomotive' },
  { name: 'Food' },
  { name: 'Gadget' },
]

export default class Home extends Component {

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

