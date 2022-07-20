import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import CountryList from "../CountryList.tsx";

describe("CountryList suggestion Test", () => {
  it("should render Countrylist component in document", () => {
    render(<CountryList />);
    const cardElement = screen.getByTestId("suggestion");
    expect(cardElement).toBeInTheDocument();
  });

  it("When props pass Japan, then their length of resut should be 1", () => {
    render(<CountryList text={"Japan"} />);
    const cardElement = screen.getAllByTestId("suggestion-items");
    expect(cardElement.length).toBe(1);
  });

  it("When props pass India, then their length of resut should be 2", () => {
    render(<CountryList text={"Ind"} />);
    const cardElement = screen.getAllByTestId("suggestion-items");
    expect(cardElement.length).toBe(2);
  });
  
  it("When props pass as invalid country name , then their length of resut should be 0", () => {
    render(<CountryList text={"Invalid country name"} />);
    const cardElement = screen.queryAllByTestId("suggestion-items");
    expect(cardElement.length).toBe(0);
  });
});
