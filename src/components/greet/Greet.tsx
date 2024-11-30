// Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 "greet" Folder 👉🏻 Greet.tsx

type GreetProps = {
    name?: string
}

const Greet = ({ name }: GreetProps) => {

    return (
        <div>
            Hello {name}
        </div>
    )

}

export default Greet

/*
    🔥 How does Jest/Vitest Watch-Mode work? 🔥

    🔹 if we go back to vs code, we can see in the source control panel, we have two changed files
    so when we run "npm run test" Jest/Vitest will start in watch mode
    watch these two files and execute the tests only in the changed test file
    even though we have another test files like "App.test.tsx". Jess/Vitest does NOT pick that up
    and this is a really helpful feature once your code base grows in size and you have hundreds of tests
    you would be interested in the files you are currently working on and watch mode will help with that
    let's now commit the files to github and see what happens
    now if we run "npm run test", you can see the message no test found related to files changed since last commit 
    press "a" to run all tests 🔹

    🔹 to quickly recap, "Watch-Mode" is an option that we can pass to Jest/Vitest
    asking to watch files that have changed since the last commit 
    and execute tests related only to those change files 🔹
*/