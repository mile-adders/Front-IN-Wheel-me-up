/* eslint-disable no-unused-vars */
import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Header from '../../../components/Header/Header.js';

describe('<Header />', ()=>{
  // it('exists at the start of our application',()=>{
  //   let app = shallow(<Header />);
  //   expect(app.find('h1').exists()).toBeTruthy();
  //   expect(app.find('h1').text()).toContain('Wheel Me Up');
  // });
  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});