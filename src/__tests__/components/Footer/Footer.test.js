/* eslint-disable no-unused-vars */
import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from '../../../components/Footer/Footer.js';

describe('<Footer />', ()=>{
  it('exists at the start of our application',()=>{
    let app = shallow(<Footer />);
    expect(app.find('p').exists()).toBeTruthy();
    expect(app.find('p').text()).toContain('&copy; Mile Adders');
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});