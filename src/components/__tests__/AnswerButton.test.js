import React from "react";
import { mount } from "enzyme";
import "../../setupTest";
import Root from "../../Root";
import AnswerButton from "../AnswerButton";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <AnswerButton answer="It works" />
    </Root>
  );
});

describe("<AnswerButton/>", () => {
  it("Renders a button element", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("Has value equal to answer prop", () => {
    expect(wrapper.find("button").text()).toEqual("It works");
  });

  it("Has a class name of answer-button", () => {
    expect(wrapper.find("button").hasClass("answer-button")).toEqual(true);
  });
});
