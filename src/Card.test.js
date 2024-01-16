import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

describe('Card component', () => {
  it('renders without crashing', () => {
    render(<Card caption= "testing image 1" src="test1.com" currNum={1} totalNum={3} />)
  })
  
  it('matches snapshot', () => {
    const { asFragment } = render(<Card caption= "testing image 1" src="test1.com" currNum={1} totalNum={3} />);
    expect(asFragment()).toMatchSnapshot()
  })
})
