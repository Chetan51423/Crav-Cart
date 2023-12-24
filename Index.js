import React from "react"
import ReactDOM from "react-dom/client"

// # creatingelements in react using React.createElement()

// const heading1 = React.createElement('h1', {id:'title'}, 'Root-> container-> h1 I have Ignited the react app');
// const heading2 = React.createElement('h1',{id:'title2'}, 'Root-> container-> h2');
// const div2 = React.createElement('div', {id:'container'}, [heading1, heading2]);


//Creating elemets using JSX
const heading = (<h1 id="container">Hello from JSX and babel</h1>)    // called as JSX Expression

const root2 = ReactDOM.createRoot(document.getElementById('root'));
root2.render(heading);