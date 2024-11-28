// index.ts

/*
    🔹 let us understand what exactly is an automated test?
    we know that an automated test is a piece of code to test the software code
    but what is that piece of code?
    well an automated test is code that throws an error 
    when the actual output does NOT match the expected output 🔹
*/

const getFullName = (firstName: string, lastName: string) => {
    return `${firstName} ${lastName}`
}

const actualFullName = getFullName("Bruce", "Wayne");
const expectedFullName = "BruceWayne";

if (actualFullName !== expectedFullName) {
    throw new Error(`${actualFullName} is NOT equal to ${expectedFullName}`);
}

/*
    🔹 this is exactly what Jest is going to help us with.
    an automated test is code that throws an error 
    when the actual output does not match the expected output
    it will pass when the output is correct
    and provide meaningful feedback when it is NOT 🔹
*/


const App = () => {

    
    return (
        <div>App</div>
    )

}

export default App