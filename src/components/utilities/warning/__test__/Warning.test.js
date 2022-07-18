import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Warning from "../Warning.tsx";

describe("Warning Test", () => {
  it("Initially should not render in document", () => {
    render(<Warning  found={true} />)
    const warningElement=screen.getByTestId('warning-message')
    expect(warningElement).not.toBeVisible();
  });

  it("should be visible only when props is false passes", () => {
    render(<Warning  found={false} />)
    const warningElement=screen.getByTestId('warning-message')
    expect(warningElement).toBeVisible();
  });
});
