// Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 "query" Folder 👉🏻 Query.tsx

const Query = () => {

    return (
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
    )

}

export default Query