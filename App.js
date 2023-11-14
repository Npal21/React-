function MyButton(){
    function handleClick(){
        alert("You clicked me!")
    }
}

export default function MyApp(){
    return(
        <button onclick={handleClick}>
            Click Me!
        </button>
    );
}