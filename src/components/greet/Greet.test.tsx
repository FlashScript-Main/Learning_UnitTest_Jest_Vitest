// Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 "greet" Folder 👉🏻 Greet.test.tsx

import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Greet from "./Greet";

test("Greet Component renders correctly", () => {
    render(<Greet />);

    const textElement = screen.getByText("Hello");

    expect(textElement).toBeInTheDocument();
});


/*
    🔥 Note 🔥
    🔹 if you use ".skip" after the "test" function, 
    Jest/Vitest will skip test that Test Name 🔹
*/
test.skip("Greet Component renders with a name", () => {
    render(<Greet name="Hossein" />);

    const textElement = screen.getByText("Hello Hossein");

    expect(textElement).toBeInTheDocument();
});