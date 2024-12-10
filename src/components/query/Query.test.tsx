// Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 "query" Folder 👉🏻 Query.test.tsx

import { describe, expect, test } from "vitest";
// import { render, screen } from "@testing-library/react";
import { render, screen } from '../../utils/test-utils';
import Query from "./Query";

describe("Theme Provider", () => {
    test("Renders Text Correctly", () => {
        render(<Query />);

        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("Light Mode");
    });
});


/*
describe("Theme Provider", () => {
    test("Renders Text Correctly", () => {
        render(<Query />);

        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("Light Mode");
    });
});
*/

/*
describe("Keyboard Interactions", () => {
    test("Renders a Count of 10 After Clicking the Set Button", async () => {
        user.setup();

        render(<Query />);

        const amountInput = screen.getByRole("spinbutton");

        await user.type(amountInput, "10");

        expect(amountInput).toHaveValue(10);

        const setButton = screen.getByRole("button", { name: "Set" });
        await user.click(setButton);

        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("Count: 10");
    });

    test("Elements are Focused in the Right Order", async () => {
        user.setup();

        render(<Query />);

        const amountInput = screen.getByRole("spinbutton");
        const setButton = screen.getByRole("button", { name: "Set" });
        const incrementButton = screen.getByRole("button", { name: "Increment" });

        await user.tab();
        expect(incrementButton).toHaveFocus();

        await user.tab();
        expect(amountInput).toHaveFocus();

        await user.tab();
        expect(setButton).toHaveFocus();
    });
});
*/

/*
describe("Pointer Interactions", () => {
    test("#1 => Renders a Count of 2 After Clicking the Increment Button Twice", async () => {
        user.setup();

        render(<Query />);

        const incrementButton = screen.getByRole("button", { name: "Increment" });
        await user.click(incrementButton);
        await user.click(incrementButton);
        
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("Count: 2");
    });

    // ❗ 👆🏻 OR 👇🏻 ❗
    
    test("#2 => Renders a Count of 2 After Clicking the Increment Button Twice", async () => {
        user.setup();

        render(<Query />);

        const incrementButton = screen.getByRole("button", { name: "Increment" });
        await user.dblClick(incrementButton);
        
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("Count: 2");
    });
});
*/

/*
test("Renders Correctly", () => {
    render(<Query />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
});

test("Renders a Count of 0", () => {
    render(<Query />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("Count: 0");
});

test("Renders a Count of 1 After Clicking the Increment Button", async () => {
    user.setup();

    render(<Query />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    
    await user.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("Count: 1");
});
*/

/*
describe("Pointer Interactions", () => {
    test("Person Info", () => {
        render(<Query />);

        screen.logTestingPlaygroundURL();

        const nameInput = screen.getByRole('textbox');
        expect(nameInput).toBeInTheDocument();

        const ageInput = screen.getByRole('spinbutton');
        expect(ageInput).toBeInTheDocument();
    });
});
*/

/*
describe("queryBy", () => {
    test("renders Login button", () => {
        render(<Query />);

        const loginButton = screen.getByRole("button", { name: "Login" });
        expect(loginButton).toBeInTheDocument();
    });

    test("Start Learning button is NOT rendered", () => {
        render(<Query />);

        const startLearningButton = screen.queryByRole("button", { name: "Start Learning" });
        expect(startLearningButton).not.toBeInTheDocument();
    });
});
*/

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