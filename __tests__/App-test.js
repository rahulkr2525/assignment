/**
 * @format
 */

import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import {shallow} from 'enzyme';

it('renders correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchsnapshot;
});
