function Demo(){
    function Message(){
        alert("Button Clicked");
    }
    return(
        <>
        <button onClick={Message}>Click</button>
        </>
    );
}
export default Demo;