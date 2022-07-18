import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from "../Card.tsx";

describe("Card", () => {
  it("should render card in document", () => {
    render(<Card />);
    const bt1 = screen.getByRole("button", { name: /Show Weather Data/i });
    expect(bt1).toBeInTheDocument();
  });
});
