import React from 'react';
import {create} from 'react-test-renderer';

import Login from '../src/screens/login/index';
import ContainerTest from '../src/helpers/containerTest';

describe('login snapshot', () => {
  test('should render', () => {
    const component = create(ContainerTest(<Login />)).toJSON();
    expect(component).toMatchSnapshot();
  });
});
