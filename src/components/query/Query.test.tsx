// Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 "query" Folder 👉🏻 Query.test.tsx

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Query from "./Query";

describe("Eslint", () => {
    test("Renders Text Correctly", () => {
        render(<Query />);

        const buttonElement = screen.getByRole("button");
        expect(buttonElement).not.toBeEnabled();
    });
});
