import React from "react";
import { mount } from "enzyme";
import "../setupTest";
import Root from "../Root";
import App from "../App";
import Navbar from "../components/Navbar";
import GamePage from "../pages/GamePage";
import Footer from "../components/Footer";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe("<App/>", () => {
  it("Renders propertly", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("Renders a <Navbar/>", () => {
    expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
  });

  it("Reanders a <Footer/>", () => {
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });

  it("Reanders a <Footer/>", () => {
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });
});

/* 
[x] Component Renders Correctly
[] Test switch statement
[x] Renders NavBar 
[x] Renders Footer

 */
