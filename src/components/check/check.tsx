import { useState } from "react";

const Check = () => {
    const [user, setUser] = useState<string>("");

    console.log(user);
    console.log(setUser);

    return (
        <div>
            <input type="text" placeholder="Hello" />

            <h1>{"Hello"}</h1>

            <p>This is a paragraph</p>
        </div>
    );
};

export default Check;
