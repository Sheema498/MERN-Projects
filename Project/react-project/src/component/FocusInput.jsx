import { useRef } from "react";
function FocusInput(){
    const Inputref = useRef();

    function handleFoucus(){
        Inputref.current.focus();
    }

    return(
        <>
        <input ref={Inputref} />
        <button onClick={handleFoucus}> Focus Input</button>
        </>
    );
}
export default FocusInput;