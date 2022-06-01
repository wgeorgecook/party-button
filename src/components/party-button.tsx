import { createEffect, createRenderEffect, createSignal } from "solid-js";

// CssColorValues are an enumerated representation of CSS hex codes
// for human readability
enum CssColorValues {
    White = "#ffffff",
    Red = "#ff0000",
    Green = "#00ff00",
    Blue  = "#0000ff",
    Purple = "#9d32a8",
    Yellow = "#e1f00c",
    Orange = "#f06b0c",
    Pink = "#f00c9c"
}

// adapted from solution found at
// https://stackoverflow.com/questions/33026791/how-do-i-get-a-random-value-from-enums-in-javascript
const getRandomEnumValue = (currentValue: CssColorValues): CssColorValues => {
    //save enums inside array
    const enumValues = Object.values(CssColorValues); 
    
    //Generate a random index (max is array length)
    const randomIndex = Math.floor(Math.random() * enumValues.length);

    // return the random element at the calculated index if it does 
    // not match the current value  
    const selected = enumValues[randomIndex] as CssColorValues;
    if (selected === currentValue) {
        return getRandomEnumValue(currentValue);
    }

    return selected
}

// partyButton returns a component containing a button that when 
// clicked will set the background of the current page to a new color
const partyButton = () => {
    const [backgroundColor, setBackgroundColor] = createSignal(CssColorValues.White)

    // effects in Solid watch the state being referenced and will 
    // update the DOM directly as the state changes
    createRenderEffect(() => {
        // this is fine for our little POC
        document.querySelector("html").style.backgroundColor = backgroundColor()
    });

    return (
        <button onclick={
            () => setBackgroundColor(getRandomEnumValue(backgroundColor()))
            }>
                Party Time!
        </button>
    )

}

export default partyButton