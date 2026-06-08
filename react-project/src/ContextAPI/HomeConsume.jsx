// Consume data

import { useContext } from "react";
import { UserContext } from "./UserContext";

function HomeConsume(){
    const user = useContext(UserContext);
    return <h1>{user}</h1>
}
export default HomeConsume;