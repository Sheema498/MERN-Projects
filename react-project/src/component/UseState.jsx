import { useState } from "react";

function UseState(){
        const [user, setUser] = useState("");
    return(
        <>
        <input type="text" 
        onChange={(e) => setUser(e.target.value)}/>

        <h1>{user}</h1>
        </>
    );
}
export default UseState;