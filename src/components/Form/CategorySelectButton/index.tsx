import React from 'react';

import {
  Container,
  Category,
  Icon,
} from './styles';

import {
    GestureHandlerRootView,
    RectButton,
} from 'react-native-gesture-handler';

interface Props {
  title: string;
  onPress?: () => void;
}

export function CategorySelectButton({
  title,
  onPress
}: Props){
  return(
      <GestureHandlerRootView>
        <Container onPress={onPress}>
            <Category>{title}</Category>
            <Icon name="chevron-down"/>
        </Container>
    </GestureHandlerRootView>
  )
}