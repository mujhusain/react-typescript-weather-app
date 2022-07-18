import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import {CountryData} from "../CountryCard.tsx";

describe("CountryCard Test", () => {
  it("should render CountryCard in document", () => {
    render(<CountryData  name="india"
        capital="new delhi"
        population={130}
        latlng={[1,2]}
        flag=""
        children={"<h1>TestElement</h1>"}
         />)
    const cardElement = screen.getByTestId("countrycard-test");
    expect(cardElement).toBeInTheDocument();
  });
});
