// Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 "query" Folder 👉🏻 Query.test.tsx

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Query from "./Query";

describe("Query", () => {
    test("renders correctly", () => {
        render(<Query />);

        const nameInput = screen.getByRole("textbox");
        expect(nameInput).toBeInTheDocument();

        const jobLocationSelect = screen.getByRole("combobox");
        expect(jobLocationSelect).toBeInTheDocument();

        const termsCheckbox = screen.getByRole("checkbox");
        expect(termsCheckbox).toBeInTheDocument();

        // Let's check if the Submit Button Renders Correctly
        const submitButton = screen.getByRole("button");
        expect(submitButton).toBeInTheDocument();
    });
});