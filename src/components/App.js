//Create an App component from scratch

// Use the useEffect hook in the App component. Inside the callback for useEffect, 
// send a fetch request to https://dog.ceo/api/breeds/image/random, 
// a free API that returns a random image of a dog.

// // Display a <p> tag with the text of "Loading..." when the component is first rendered

// // After receiving a response from the API, show the dog image in an <img> tag, 
// with the alt attribute set to "A Random Dog".

// create your App component here
import React, {useEffect, useState} from "react"

function App() {
    const [dogPic, setDogPic] = useState("")

useEffect(()=> {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((r)=>r.json())
    .then((data)=> {
        setDogPic(data.message);
    });
}, []);

if (!dogPic) return <p>Loading...</p>
return <img src={dogPic} alt="A Random Dog"/>;
}

export default App;