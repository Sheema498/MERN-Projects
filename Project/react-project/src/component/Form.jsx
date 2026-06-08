import { useState } from "react";

function Form(){
    const [name, setName] = useState("");

    return(
        <>
        <input type="text " 
        onChange={(e) => setName(e.target.value)}
        />

        <h1>{name}</h1>
        </>
    );
}

export default Form;