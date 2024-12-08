// Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 "query" Folder 👉🏻 Query.tsx

import { useEffect, useState } from "react"

const Query = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    /*
        🔹 it's also very important to note that 
        "findByRole" has a default timeout of 1000 milliseconds
        if i change the set timeout duration to 1001 milliseconds,
        we can see... 🔹
    */
    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true);
        }, 1001);
    }, []);

    return (
        <>
            {isLoggedIn ? (
                <button>Start Learning</button>
            ): (
                <button onClick={() => setIsLoggedIn(true)}>
                    Login
                </button>
            )}
        </>
    )

}

export default Query

/*
const Query = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            {isLoggedIn ? (
                <button>Start Learning</button>
            ): (
                <button onClick={() => setIsLoggedIn(true)}>
                    Login
                </button>
            )}
        </>
    )

}
*/

/*
const Query = ({ skills }: { skills: string[] }) => {

    return (
        <ul>
            {skills.map((skill, index) => (
                <li key={index}>
                    {skill}
                </li>
            ))}
        </ul>
    )

}
*/

/*
<div>
    <img 
        src="/public/vitest-image" 
        alt="Vitest" 
    />
</div>
*/

/*
<div>
    <input 
        type="text" 
        value="name"
        onChange={() => {}}
    />

    <input 
        type="text" 
        value="age"
        onChange={() => {}}
    />
</div>
*/

/*
<div>
    <input 
        type="text" 
        placeholder="Enter Your Name"
    />

    <input 
        type="number" 
        placeholder="Enter Your Age"
    />
</div>
*/

/*
<>
    <div>
        <label htmlFor="name">
            Name
        </label>

        <input 
            type="text" 
            id="name" 
        />
    </div>

    <div>
        <label htmlFor="bio">
            Name
        </label>

        <textarea 
            name="bio" 
            id="bio"
        />
    </div>
</>
*/

/*
<form>
    <div>
        <label htmlFor="name">
            Name
        </label>

        <input 
            type="text" 
            id="name" 
        />
    </div>

    <div>
        <label htmlFor="bio">
            Bio
        </label>

        <textarea 
            name="bio" 
            id="bio"
        />
    </div>

    <div>
        <label htmlFor="job-location">
            Job Location
        </label>

        <select id="job-location">
            <option value="">Select a Country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
        </select>
    </div>

    <div>
        <label>
            <input 
                type="checkbox" 
                id="terms" 
            />

            <span>
                I agree to the terms and conditions
            </span>
        </label>
    </div>

    <button>
        Submit
    </button>
</form>
*/