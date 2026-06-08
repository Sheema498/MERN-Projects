import { useContext } from "react";
import { UserContext } from "./UserContext";

// Consume Data
function HomeContext(){
const user = useContext(UserContext);

return <h1>{user}</h1>
}

export default HomeContext;