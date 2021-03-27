import React from "react";
import { shallow } from "enzyme";
import "../../setupTest";
import Footer from "../Footer";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Footer />);
});

describe("<Footer/>", () => {
  it("Renders div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("Has a class name of footer", () => {
    expect(wrapper.find("div").hasClass("footer")).toEqual(true);
  });
});
