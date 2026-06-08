import { useEffect, useState } from 'react';

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    return (
        <>
            {
                users.map(user => (
                    <h3 key={user.id}>{user.name} , {user.username}</h3>
                ))
            }
        </>
    );
}

export default Users;