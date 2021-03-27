import React from "react";
import { mount } from "enzyme";
import "../../setupTest";
import DifficultyButton from "../DifficultyButton";

let wrapper;

beforeEach(() => {
  wrapper = mount(<DifficultyButton name="It works" />);
});

describe("<DifficultyButton/>", () => {
  it("Renders a button element", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("Has value equal to name prop", () => {
    expect(wrapper.find("button").text()).toEqual("It works");
  });

  it("Has a class name of button-difficulty ", () => {
    expect(wrapper.find("button").hasClass("button-difficulty")).toEqual(true);
  });
});
/*
[] Renders propertly
[] Has a classname of button-difficulty
[]

*/
