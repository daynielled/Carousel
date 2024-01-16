import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

describe('Carousel component', () => {
  it('renders without crashing', () => {
    render(<Carousel photos={TEST_IMAGES} title="images for testing" />)
  })

  it('matches Carousel component snapshot', () => {
    const { asFragment } = render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('Arrow funtionality in Carousel component', () => {
  it("works when you click on the right arrow", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );
    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();
  
    // move forward in the carousel
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);
  
    // expect the second image to show, but not the first
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();
  });
  
  
  
  it("works when you click on the left arrow", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );
     // expect the first image to show, but not the second
     expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();
  
    // move forward in the carousel
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);
  
    // expect the second image to show, but not the first
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();
  
  
  
  // move backward in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);
  
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  
  });
  
})


describe('Arrow visibility in Carousel compnent', () => {
  it('hides left arrow on the first image', () => {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );

    //When on the fist image, expect left arrow to be missing
    expect(
      container.querySelector('.bi-arrow-left-circle')
      ).not.toBeInTheDocument();
  });

  it('hides the right arrow on the  last image', () => {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );

    //Move to the last image
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);

    //When on the last image
    expect(
      container.querySelector('.bi-arrow-right-circle')
    ).not.toBeInTheDocument();

  });
});