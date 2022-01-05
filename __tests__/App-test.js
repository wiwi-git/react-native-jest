/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import 'jest-styled-components';
// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';

let props;
let component;

function getTempComponent(props) {
  return <App {...props} />;
}

describe('[App] render', () => {
  props = {}; // fill test props
  component = getTempComponent(props);
  test('renders without crashing', () => {
    const rendered = render(component);
    expect(rendered).toMatchSnapshot(); // 기존 스냅샷과 일치하는는지.
    expect(rendered).toBeTruthy(); // 컴포넌트가 null, undefined같은 값을 가지지는 않았는지
  });
});
