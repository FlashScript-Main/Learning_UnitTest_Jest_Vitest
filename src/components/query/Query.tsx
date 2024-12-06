// Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 "query" Folder 👉🏻 Query.tsx

const Query = () => {

    return (
        <div data-testid="query">
            Query
        </div>
    )

}

export default Query

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