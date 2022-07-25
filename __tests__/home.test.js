import React from 'react';
import {create} from 'react-test-renderer';

import Home from '../src/screens/home/index';
import ContainerTest from '../src/helpers/containerTest';

describe('home snapshot', () => {
  test('should render', () => {
    const component = create(ContainerTest(<Home />)).toJSON();
    expect(component).toMatchSnapshot();
  });
});
