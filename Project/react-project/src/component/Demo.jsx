function Demo(){
    function showMessage(){
        alert("Button Clicked");
    }
    return(
        <button onClick={showMessage}>
            click
        </button>
    );
}
export default Demo;