import { useState, useEffect } from "react";

function UseEffect() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <>
            {
                users.map(user => (
                    <h3 key={user.id}>{user.name}</h3>
                ))
            }
        </>
    );
}
export default UseEffect;