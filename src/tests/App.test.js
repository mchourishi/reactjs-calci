import React from 'react';
import { shallow } from "enzyme";
import App from "../App";
import DisplayPanel from "../components/DisplayPanel";
import ButtonPanel from "../components/ButtonPanel";

describe('App', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
  
  it('should render a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it("should render the DisplayPanel Component", () => {
    expect(wrapper.containsMatchingElement(<DisplayPanel />)).toEqual(true);
  });

  it("should render the ButtonPanel Component", () => {
    expect(wrapper.containsMatchingElement(<ButtonPanel />)).toEqual(true);
  });
});