import React from "react";
import { shallow } from "enzyme";
import ButtonPanel from "../components/ButtonPanel";
import Button from "../components/Button";

describe("Button Panel", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<ButtonPanel clickHandler={jest.fn()} />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should render the Button Component", () => {
    expect(wrapper.containsMatchingElement(<Button />)).toEqual(true);
  });

  it("should render total 22 Buttons", () => {
    expect(wrapper.find(Button).length).toEqual(22);
  });

  it("should render 6 function keys",()=>{
    expect(wrapper.find('.function-keys').children().length).toEqual(6);
  });

  it("should render 11 digit keys",()=>{
    expect(wrapper.find('.digit-keys').children().length).toEqual(11);
  });

  it("should render 5 operator keys",()=>{
    expect(wrapper.find('.operator-keys').children().length).toEqual(5);
  });
});
