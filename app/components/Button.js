import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
} from 'react-native';

import styled from 'styled-components/native';

const screenWidth = Dimensions.get('window').width;

class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.style = {
      background: props.background || '#fff',
      borderColor: props.borderColor || 'rgb(255, 87, 34)',
      color: props.color || 'rgb(255, 87, 34)',
      width: props.width || (screenWidth*0.3),
      height: props.height || 40,
      marginLeft: props.marginLeft || 0,
    }
  }
  render() {
    const { text } = this.props;
    return (
      <Container
        backgroundColor={this.style.background}
        borderColor={this.style.borderColor}
        width={this.style.width}
        height={this.style.height}
        marginLeft={this.style.marginLeft}
      >
        <ButtonText color={this.style.color}>
          {text}
        </ButtonText>
      </Container>
    );
  }
}

export default Button;

const Container = styled.View`
  border-width: 1px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.color}
`;