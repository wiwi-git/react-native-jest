import React from 'react';
import Profile from './Profile';
import styled from 'styled-components';
import {View} from 'react-native';

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <Container>
      <Profile userName={'userName'} name={'name'} />
    </Container>
  );
};

export default App;
