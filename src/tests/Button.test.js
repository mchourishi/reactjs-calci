import React from "react";
import { shallow } from "enzyme";
import Button from "../components/Button";

describe("Button Component", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Button />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should render the button", () => {
    expect(wrapper.containsMatchingElement(<button />)).toEqual(true);
  });

  it("Test click event", () => {
    const mockCallBack = jest.fn();
    const button = shallow(<button onClick={mockCallBack}>Ok!</button>);
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it("button should have class calculator-key", () => {
    expect(wrapper.find("button").hasClass("calculator-key")).toEqual(true);
  });
});
