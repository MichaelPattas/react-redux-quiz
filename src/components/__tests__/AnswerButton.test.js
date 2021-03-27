import React from "react";
import { shallow } from "enzyme";
import AnswerButton from "../AnswerButton";
import "../../setupTest";

it("Renders a button element", () => {
  const wrapper = shallow(<AnswerButton />);
  expect(wrapper.find("button").length).toEqual(1);
});
