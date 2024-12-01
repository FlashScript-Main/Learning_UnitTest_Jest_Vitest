// Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 "greet" Folder 👉🏻 Greet.test.tsx

import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import Greet from "./Greet";

describe("Greet #1", () => {
    it.skip("renders correctly", () => {
        render(<Greet />);
    
        const textElement = screen.getByText("Hello");
    
        expect(textElement).toBeInTheDocument();
    });
});

describe("Greet #2", () => {
    test("renders with a name", () => {
        render(<Greet name="Hossein" />);
    
        const textElement = screen.getByText("Hello Hossein");
    
        expect(textElement).toBeInTheDocument();
    });
});