// Root 👉🏻 "src" Folder 👉🏻 "hooks" Folder 👉🏻 "use-counter" Folder 👉🏻 useCounter.test.tsx

import { renderHook, act } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import useCounter from "./useCounter";

describe("useCounter", () => {
    test("Should Render the Inital Count", () => {
        const { result } = renderHook(useCounter);

        expect(result.current.count).toBe(0);
    });

    test("Should Accept and Render the same Initial Count", () => {
        const { result } = renderHook(useCounter, {
            initialProps: {
                initialCount: 10,
            },
        });

        expect(result.current.count).toBe(10);
    });

    test("Should Increment the Count", () => {
        const { result } = renderHook(useCounter);

        act(() => {
            result.current.increment();
        });

        expect(result.current.count).toBe(1);
    });

    test("Should Decrement the Count", () => {
        const { result } = renderHook(useCounter);

        act(() => {
            result.current.decrement();
        });

        expect(result.current.count).toBe(-1);
    });
});

/*
describe("useCounter", () => {
    test("Should Render the Inital Count", () => {
        const { result } = renderHook(useCounter);

        expect(result.current.count).toBe(0);
    });

    test("Should Accept and Render the same Initial Count", () => {
        const { result } = renderHook(useCounter, {
            initialProps: {
                initialCount: 10
            }
        });

        expect(result.current.count).toBe(10);
    });

    test("Should Increment the Count", () => {
        const { result } = renderHook(useCounter);
        
        act(() => {
            result.current.increment();
        });

        expect(result.current.count).toBe(1);
    });

    test("Should Decrement the Count", () => {
        const { result } = renderHook(useCounter);
        
        act(() => {
            result.current.decrement();
        });

        expect(result.current.count).toBe(-1);
    });
});
*/

/*
describe("useCounter", () => {
    test("Should Render the Inital Count", () => {
        const { result } = renderHook(useCounter);

        expect(result.current.count).toBe(0);
    });

    test("Should Accept and Render the same Initial Count", () => {
        const { result } = renderHook(useCounter, {
            initialProps: {
                initialCount: 10
            }
        });

        expect(result.current.count).toBe(10);
    });
});
*/
