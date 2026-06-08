import {useEffect} from 'react';

function UseEffect(){
    useEffect(() => {
        console.log("Component loaded");
    },[]);
    return <h1>Hello</h1>;
}

export default UseEffect;