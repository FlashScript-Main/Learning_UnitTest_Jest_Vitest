// Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 "counter" Folder 👉🏻 Counter.test.tsx

import { render, screen } from "@testing-library/react";
import { describe, expect, test, vitest } from "vitest";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
    test("Should Render the Counter Component", () => {
        render(<Counter count={0} />);

        const counterText = screen.getByRole("heading", { name: "Counter" });
        expect(counterText).toBeInTheDocument();
    });

    test("Handlers are Called", async () => {
        user.setup();

        const incrementHandler = vitest.fn(); 
        const decrementHandler = vitest.fn(); 

        render(
            <Counter 
                count={0} 
                handleIncrement={incrementHandler}
                handleDecrement={decrementHandler}
            />
        );

        const incrementButton = screen.getByRole("button", { name: "Increment" });
        const decrementButton = screen.getByRole("button", { name: "Decrement" });

        await user.click(incrementButton);
        await user.click(decrementButton);

        expect(incrementHandler).toHaveBeenCalledTimes(1);
        expect(decrementHandler).toHaveBeenCalledTimes(1);
    });
});