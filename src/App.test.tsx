// Root 👉🏻 "src" Folder 👉🏻 App.test.tsx

import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test("Renders App Component", () => {
    render(<App />);

    const appElement = screen.getByTestId("app");

    expect(appElement).toBeInTheDocument();
});

test("Renders Vitest Link", () => {
    render(<App />);

    const linkElement = screen.getByText("Vitest");

    expect(linkElement).toBeInTheDocument();
});

// import App from './App';

// test('renders App component', () => {
//     render(<App />);
//     const appElement = screen.getByTestId('app');
//     expect(appElement).toBeInTheDocument();
// });

// test('demo', () => {
//     expect(true).toBe(true)
// })

// test("renders learn react link", () => {
//     render(<App />);
//     const linkElement = screen.getByText("Learn React");
//     expect(linkElement).toBeInTheDocument();
// })

// test("Render Fuck", () => {
//     render(<App />);
//     const fuck = screen.getByTestId("fuck");
//     expect(fuck).toBeInTheDocument();
// })
