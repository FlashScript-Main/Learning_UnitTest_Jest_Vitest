// Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 "users" Folder 👉🏻 Users.tsx

import { useEffect, useState } from "react";

type FetchedDataType = {
    name: string;
};

const Users = () => {
    const [users, setUsers] = useState<FetchedDataType[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch(() => {
                setError("Error fetching users");
            });
    }, []);

    return (
        <div>
            <h1>Users</h1>

            {error && <p>{error}</p>}

            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
