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