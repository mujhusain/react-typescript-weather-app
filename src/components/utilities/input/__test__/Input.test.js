import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Input from "../Input.tsx";

const mockFunc = jest.fn()

const MockInput = () => (
  <BrowserRouter>
    <Input jestFunc={mockFunc()} />
  </BrowserRouter>
);

describe("Input and Button Test", () => {
  it("should render the Input in document", () => {
    render(<MockInput />);
    const inputElement = screen.getByLabelText("Enter Country Name");
    expect(inputElement).toBeInTheDocument("");
  });
  it("On render the Input field should be in focused mode", () => {
    render(<MockInput />);
    const inputElement = screen.getByLabelText("Enter Country Name");
    expect(inputElement).toHaveFocus();
  });

  it("should render the Button in document", () => {
    render(<MockInput />);
    const buttonElement = screen.getByText(/Search/i);
    expect(buttonElement).toBeInTheDocument("");
  });

  it("Button should be disabled when user input lot spaces only", () => {
    render(<MockInput />);
    const inputElement = screen.getByLabelText("Enter Country Name");
    const buttonElement = screen.getByText(/Search/i);
    expect(buttonElement).toBeDisabled();
    fireEvent.change(inputElement, { target: { value: "   " } });
    expect(buttonElement).toBeDisabled();
  });

  it("Intially button should render disabled, when input field get some value then button should enabled", () => {
    render(<MockInput />);
    const inputElement = screen.getByLabelText("Enter Country Name");
    const buttonElement = screen.getByText(/Search/i);
    expect(buttonElement).toBeDisabled();

    fireEvent.change(inputElement, { target: { value: "india" } });
    expect(buttonElement).toBeEnabled();
  });

  it("On click over search Button handleSearch function should be called", () => {
    render(<MockInput />);
    const buttonElement = screen.getByText(/Search/i);
    fireEvent.click(buttonElement);
    expect(mockFunc).toBeCalled();

  });
});
