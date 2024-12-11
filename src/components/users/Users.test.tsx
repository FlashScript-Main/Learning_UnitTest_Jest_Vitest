// Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 "users" Folder 👉🏻 Users.test.tsx

import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Users from "./Users";

describe("Users", () => {
    test("Renders Correctly", () => {
        render(<Users />);

        const usersText = screen.getByRole("heading", { name: "Users" });
        expect(usersText).toBeInTheDocument();
    });

    test("Should Render the Users Component", async () => {
        render(<Users />);

        const users = await screen.findAllByRole("listitem");
        expect(users).toHaveLength(3);
    });
})