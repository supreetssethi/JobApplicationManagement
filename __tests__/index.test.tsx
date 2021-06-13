import { shallow } from "enzyme";
import React from "react";

import App from "../src/pages/index";

describe("With Enzyme", () => {
  it('App shows "Hello World Next - Typescript" in a <p> tag', () => {
    const app = shallow(<App />);
    expect(app.find("p").text()).toEqual("Hello World Next - Typescript");
  });
});
