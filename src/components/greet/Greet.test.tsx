// Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 "greet" Folder 👉🏻 Greet.test.tsx

import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Greet from "./Greet";

/*
    - Code Requirements:   
    Greet Component should render the text "hello" 
    and if a name is passed into the Component,
    it should render "hello" followed by the name.
*/


test("Greet Component renders correctly", () => {
    render(<Greet />);

    const textElement = screen.getByText("Hello");

    expect(textElement).toBeInTheDocument();
});


test("Greet Component renders with a name", () => {
    render(<Greet name="Hossein" />);

    const textElement = screen.getByText("Hello Hossein");

    expect(textElement).toBeInTheDocument();
});