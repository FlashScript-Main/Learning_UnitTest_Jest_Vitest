// Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 "query" Folder 👉🏻 Query.test.tsx

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Query from "./Query";

describe("queryBy", () => {
    test("renders Login button", () => {
        render(<Query />);

        const loginButton = screen.getByRole("button", { name: "Login" });
        expect(loginButton).toBeInTheDocument();
    });

    /*
        🔥 we should use "queryByRole" method 🔥
        🔹 we don't want the button to be in the Dom
        the problem is that all get by and get all by class of queries
        through an error if they can't find the matching element
        then how do we fix this test?
        well this is where a new class of queries come into picture
        they are the "queryBy" and "queryAllBy" class of queries 🔹
    */
    test("Start Learning button is NOT rendered", () => {
        render(<Query />);

        const startLearningButton = screen.queryByRole("button", { name: "Start Learning" });
        expect(startLearningButton).not.toBeInTheDocument();
    });
});


/*
describe("TextMatch", () => {
    test("string", () => {
        render(<Query />);

        const stringTextMatch = screen.getByText("Hello World");
        expect(stringTextMatch).toBeInTheDocument();
    });

    test("regex", () => {
        render(<Query />);

        const regexTextMatch = screen.getByText(/hello world/i);
        expect(regexTextMatch).toBeInTheDocument();
    });

    test("Custom Function", () => {
        render(<Query />);

        const customFunctionTextMatch = screen.getByText((context) => context.endsWith("World"));
        expect(customFunctionTextMatch).toBeInTheDocument();
    });
});
*/

/*
describe("Skills", () => {
    test("renders correctly", () => {
        render(<Query skills={skills} />);

        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    });

    test("renders each skill correctly", () => {
        render(<Query skills={skills} />);

        const listItemElements = screen.getAllByRole("listitem");
        expect(listItemElements).toHaveLength(skills.length);
    });
});

// "ul" Role 👉🏻 list
// "li" Role 👉🏻 listitem
*/

/*
describe("Query", () => {
    test("Renders Close Icon Correctly", () => {
        render(<Query />);

        const closeIcon = screen.getByTitle("close");
        expect(closeIcon).toBeInTheDocument();
    });
});
*/

/*
describe("Query", () => {
    test("renders Name Input Correctly", () => {
        render(<Query />);

        const nameInput = screen.getByPlaceholderText("Enter Your Name");
        expect(nameInput).toBeInTheDocument();
    });

    test("renders Age Input Correctly", () => {
        render(<Query />);

        const ageInput = screen.getByPlaceholderText("Enter Your Age");
        expect(ageInput).toBeInTheDocument();
    });
});
*/

/*
describe("Query", () => {
    test("renders correctly", () => {
        render(<Query />);

        const nameInput = screen.getByLabelText("Name", {
            selector: "input"
        });
        expect(nameInput).toBeInTheDocument();

        const nameTextarea = screen.getByLabelText("Name", {
            selector: "textarea"
        });
        expect(nameTextarea).toBeInTheDocument();
    });
});
*/

/*
const nameInput = screen.getByRole("textbox", {
    name: "Name"
});
expect(nameInput).toBeInTheDocument();

const bioElement = screen.getByRole("textbox", {
    name: "Bio"
});
expect(bioElement).toBeInTheDocument();

const jobLocationSelect = screen.getByRole("combobox");
expect(jobLocationSelect).toBeInTheDocument();

const termsCheckbox = screen.getByRole("checkbox");
expect(termsCheckbox).toBeInTheDocument();

const submitButton = screen.getByRole("button");
expect(submitButton).toBeInTheDocument();
*/