import React from "react";
import calculate from "../calculate";
import { isNumber } from "util";
describe("calculate", () => {
  it('AC KEY ::::: should return object with result, nextOperand, and operator as null if buttonName is "AC"', () => {
    expect(calculate({}, "AC")).toEqual({
      result: null,
      nextOperand: null,
      operator: null
    });
  });

  it('DOT KEY :::: should return empty object if buttonName is "." and object nextOperand contains a "."', () => {
    expect(calculate({ nextOperand: ".5" }, ".")).toEqual({});
  });

  it('DOT KEY :::: should return object with nextOperand appended with a "." if buttonName is "." and object nextOperand does not contain a "."', () => {
    expect(calculate({ nextOperand: "60" }, ".")).toEqual({
      nextOperand: "60."
    });
  });

  it('DOT KEY :::: should return object with nextOperand as 0." with a "." if buttonName is "." and object nextOperand does not exist', () => {
    expect(calculate({}, ".")).toEqual({
      nextOperand: "0."
    });
  });

  it('NUMBER KEY :::: should return empty object if buttonName is "0" and object nextOperand is a "0"', () => {
    expect(calculate({ nextOperand: "0" }, "0")).toEqual({});
  });

  it("NUMBER KEY :::: should return object with nextOperand appended with a buttonName if the object operator is set", () => {
    expect(calculate({ nextOperand: "6", operator: "+" }, "2")).toEqual({
      nextOperand: "62"
    });
  });

  it("NUMBER KEY :::: should return object with nextOperand appended with a buttonName if the object operator is set", () => {
    expect(calculate({ nextOperand: "6", operator: "+" }, "2")).toEqual({
      nextOperand: "62"
    });
  });

  it("NUMBER KEY :::: should return object with nextOperand as buttonName if the object nextOperand and operator is not set", () => {
    expect(calculate({ operator: "+" }, "2")).toEqual({
      nextOperand: "2"
    });
  });

  it("NUMBER KEY :::: should return object with nextOperand appended with a buttonName if the object operator is not set but the nexOperand is set", () => {
    expect(calculate({ nextOperand: "2" }, "2")).toEqual({
      nextOperand: "22",
      result: null
    });
  });

  it("EQUALS KEY :::: should return object with result calculated and nextOperand, operator should be null", () => {
    expect(
      calculate({ nextOperand: "6", operator: "+", result: "2" }, "=")
    ).toEqual({
      result: "8",
      nextOperand: null,
      operator: null
    });
  });

  it("EQUALS KEY :::: do nothing if equals key is pressed but there is no operator set", () => {
    expect(calculate({ nextOperand: "5" }, "=")).toEqual({});
  });

  it("TOGGLE KEY :::: should return object with nextOperand as -1 multiplied to it.", () => {
    expect(calculate({ nextOperand: "6" }, "+/-")).toEqual({
      nextOperand: "-6"
    });
  });

  it("TOGGLE KEY :::: should return object with result as -1 multiplied to it.", () => {
    expect(calculate({ result: "-6" }, "+/-")).toEqual({
      result: "6"
    });
  });

  it("TOGGLE KEY :::: do nothing if the toggle button is pressed but theres no nextOperand or result", () => {
    expect(calculate({}, "+/-")).toEqual({});
  });

  it("Square Root ::: Operation exists so first do calculation and then find square root ", () => {
    expect(
      calculate({ result: "3", nextOperand: "3", operator: "*" }, "√")
    ).toEqual({
      result: "3",
      nextOperand: null,
      operator: null
    });
  });

  it("Square Root ::: Operation does not exists find square root ", () => {
    expect(calculate({ nextOperand: "64" }, "√")).toEqual({
      result: "8",
      nextOperand: "8"
    });
  });

  it("Square Root :::: do nothing if the sq root button is pressed but theres no nextOperand or result", () => {
    expect(calculate({}, "√")).toEqual({});
  });

  it("Square ::: Operation does not exists find square", () => {
    expect(calculate({ nextOperand: "4" }, "x²")).toEqual({
      result: "16",
      nextOperand: "16"
    });
  });

  it("Percentage ::: Operation does not exists find percentage", () => {
    expect(calculate({ nextOperand: "50" }, "%")).toEqual({
      result: "0.5",
      nextOperand: "0.5"
    });
  });


  it("Backspace ::: Remove last digit from nextOperand only if the result does not exists ", () => {
    expect(calculate({ nextOperand: "2194" }, "⌫")).toEqual({
      nextOperand: "219"
    });
  });

  it("Plus ::: Perform Basic Calculation  ", () => {
    expect(
      calculate({ operator: "+", nextOperand: "5", result: "6" }, "+")
    ).toEqual({
      result: "11",
      nextOperand: null,
      operator: "+"
    });
  });

  it("Minus ::: Perform Basic Calculation  ", () => {
    expect(
      calculate({ operator: "-", nextOperand: "5", result: "6" }, "-")
    ).toEqual({
      result: "1",
      nextOperand: null,
      operator: "-"
    });
  });

  it("Multiply ::: Perform Basic Calculation  ", () => {
    expect(
      calculate({ operator: "*", nextOperand: "5", result: "6" }, "*")
    ).toEqual({
      result: "30",
      nextOperand: null,
      operator: "*"
    });
  });

  it("Divide ::: Perform Basic Calculation  ", () => {
    expect(
      calculate({ operator: "/", nextOperand: "5", result: "30" }, "/")
    ).toEqual({
      result: "6",
      nextOperand: null,
      operator: "/"
    });
  });

  it('Check its a number',() => {
    expect(isNumber(1)).toBeTruthy();
  });
  it('Check its not a  number',() => {
    expect(isNumber("+")).toBeFalsy();
  });
});
