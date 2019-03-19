import React from "react";
import { shallow,mount } from "enzyme";
import DisplayPanel from "../components/DisplayPanel";
import { Textfit } from "react-textfit";

describe("Display Panel", () => {
  let wrapper,dispWrapper;
  wrapper = mount(<DisplayPanel value={""}/>);
  dispWrapper = shallow(<DisplayPanel />)
  
 // it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should render a Textfit component", () => {
    expect(dispWrapper.containsMatchingElement(<Textfit />)).toEqual(true);
  });

   it("renders the value", () => {
    wrapper.setProps({ value: "0" });
    expect(wrapper.prop('value')).toEqual('0');
  }); 
});
