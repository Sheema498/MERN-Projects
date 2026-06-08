import { useRef } from "react";

function FocusInput() {
    const inputRef = useRef();

    function HandleFoucs() {
        inputRef.current.focus();
    }

    return(
        <>
        <input ref={inputRef} />
        <button onClick={HandleFoucs}>Focus Input</button>
        </>
    );
}

export default FocusInput;