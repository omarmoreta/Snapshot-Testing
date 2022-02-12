import renderer from "react-test-renderer";
import App from "./App";
// import { render, screen } from "@testing-library/react";

test("renders a snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
