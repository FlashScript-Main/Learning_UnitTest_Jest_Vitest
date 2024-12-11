// Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 "counter" Folder 👉🏻 Counter.types.tsx

export type CounterProps = {
    count: number;
    handleIncrement?: () => void;
    handleDecrement?: () => void;
}