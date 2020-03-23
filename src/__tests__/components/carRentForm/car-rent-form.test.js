  
/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React from 'react';
// import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import CarRentForm from '../../../components/carRentForm/car-rent-form.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Form />', ()=>{
//   it('Form exists at the home page of our application',()=>{
//     let app = shallow(<CarRentForm />);
//     expect(app.find('button').exists()).toBeTruthy();
//     expect(app.find('input').exists()).toBeTruthy();
//     expect(app.find('form').exists()).toBeTruthy();

  //   });
  //   it('GET Method does a GET request from any API',()=>{
  //     let app = mount(<CarRentForm />);
  //     let button = app.find('button');
  //     button.simulate('click');
  //     expect(app.state('Headers')).toBe(undefined);
  //     expect(app.state('Response')).toBe(undefined);
  //   });
  it('renders correctly', () => {
    const tree = renderer.create(<CarRentForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});