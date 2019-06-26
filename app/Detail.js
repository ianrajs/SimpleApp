import React, { Component } from 'react';
import { Dimensions, Text } from 'react-native';
import styled from 'styled-components/native'
import Button from './components/Button';
const iconLocation = require('./asset/locationEmpty.png');
const screenWidth = Dimensions.get('window').width;

class Detail extends Component {

  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;

    console.log(params);
    
    return (
      <Container>
        <ScrollContainer>
          <ImageWrapper>
            <StyledImage
              width={screenWidth}
              height={(screenWidth*0.75)}
              source={params.image}
            />
          </ImageWrapper>

          <DetailWrapper>
            <ProductName>{params.name}</ProductName>
            <Price>{params.price}</Price>
            <LocationWrapper>
              <LocationImage
                source={iconLocation}
              />
              <Location numberOfLines={1}>{params.location}</Location>
            </LocationWrapper>
          </DetailWrapper>

          <Separator/>
          
          <ProductInfo>
            <Title>Informasi Product</Title>
            <InforWrapper>
              <InfoTitle>Berat</InfoTitle>
              <InfoValue>20 Kilogram</InfoValue>
            </InforWrapper>
            <InforWrapper>
              <InfoTitle>Kondisi</InfoTitle>
              <InfoValue>Baru</InfoValue>
            </InforWrapper>
            <InforWrapper>
              <InfoTitle>Pemesanan Min.</InfoTitle>
              <InfoValue>1 Buah</InfoValue>
            </InforWrapper>
            <InforWrapper>
              <InfoTitle>Kategori</InfoTitle>
              <InfoValue>Elektronik</InfoValue>
            </InforWrapper>
          </ProductInfo>

          <Separator/>

          <ProductDesc>
            <Title>Deskripsi Product</Title>
            <DescText>
              Contoh deskripsi product Contoh deskripsi product Contoh deskripsi product Contoh deskripsi product Contoh deskripsi product Contoh deskripsi product Contoh deskripsi product Contoh deskripsi product Contoh deskripsi product Contoh deskripsi product Contoh deskripsi product Contoh deskripsi product 
            </DescText>
          </ProductDesc>
        </ScrollContainer>
        <FixBottom>
          <Button text={'Beli'} />
          <Button 
            text={'Tambahkan Ke Keranjang'}
            width={(screenWidth*0.6)}
            marginLeft={10}
            background={'rgb(250, 89, 29)'}
            color={'#fff'}
          />
        </FixBottom>
      </Container>
    );
  }
}

export default Detail;

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const ScrollContainer = styled.ScrollView`
  position: relative;
`;

const ImageWrapper = styled.View`
  align-items: center;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: ${props => props.height};
  border-radius: 5px;
`;

const DetailWrapper = styled.View`
  background-color: #ffffff;
  width: 100%;
  shadow-color: #ccc;
  shadow-offset: 0 0;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 3;
  z-index: 3;
  border-radius: 5px;
  padding: 20px;
`;

const ProductName = styled.Text`
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Price = styled.Text`
  color: rgb(255, 87, 34);
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Location = styled.Text`
  color: rgb(49, 53, 59);
  font-size: 16px;
  font-weight: 500;
  margin-left: 3px;
`;

const LocationWrapper = styled.View`
  flex-direction: row;
`;

const LocationImage = styled.Image`
  width: 13px;
  height: 18px;
  resize-mode: contain;
`;

const ProductInfo = styled.View`
  background-color: #ffffff;
  width: 100%;
  shadow-color: #ccc;
  shadow-offset: 0 0;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 3;
  z-index: 3;
  border-radius: 5px;
  padding: 20px;
`;

const Title = styled.Text`
  color: rgba(0, 0, 0, 0.7);
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const InforWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const InfoTitle = styled.Text`
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
  font-weight: 500;
`;

const InfoValue = styled.Text`
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
  font-weight: normal;
`;

const Separator = styled.View`
  height: 10px;
`;

const ProductDesc = styled.View`
  background-color: #ffffff;
  width: 100%;
  shadow-color: #ccc;
  shadow-offset: 0 0;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 3;
  z-index: 3;
  border-radius: 5px;
  padding: 20px;
`;

const DescText = styled.Text`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
`;

const FixBottom = styled.View`
  position: absolute;
  flex-direction: row;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  height: 60px;
  width: ${screenWidth};
  shadow-color: #ccc;
  shadow-offset: 0 3px;
  shadow-opacity: 0.6;
  shadow-radius: 10px;
  align-items: center;
  justify-content: center;
`;