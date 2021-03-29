import React from "react";
import { mount, shallow } from "enzyme";
import "../../setupTest";
import Root from "../../Root";
import GameCard from "../GameCard";

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <Root>
      <GameCard />
    </Root>
  );
});

describe("<GameCard/>", () => {
  it("Renters", () => {
    console.log(wrapper.debug());
  });
});

/*
[] Renders without crashing
[]
[]
[]




*/
