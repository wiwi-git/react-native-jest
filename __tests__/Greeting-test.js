import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Greeting from '../src/Greeting';

describe('[Greeting] Test', () => {
  const onPressMock = jest.fn();
  const props = {
    title: 'Hello!',
    onPress: onPressMock,
  };

  test('버튼이 눌린다.', () => {
    const rendered = render(<Greeting {...props} />);

    for (let i = 0; i < 5; i++) {
      fireEvent(rendered.getByText('Hello!'), 'onPress');
    }
    expect(onPressMock).toBeCalledTimes(5);
    expect(rendered.toJSON().children[0].children[0].children[0]).toEqual(
      'Hello!',
    );
  });
});
