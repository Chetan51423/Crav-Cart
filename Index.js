import React from "react"
import ReactDOM from "react-dom/client"

// # creatingelements in react using React.createElement()

// const heading1 = React.createElement('h1', {id:'title'}, 'Root-> container-> h1 I have Ignited the react app');
// const heading2 = React.createElement('h1',{id:'title2'}, 'Root-> container-> h2');
// const div2 = React.createElement('div', {id:'container'}, [heading1, heading2]);


//Creating elemets using JSX
const heading = (<h1 id="container">Hello from JSX and babel in react element</h1>);    // called as JSX Expression

const Heading3 =()=>
{
    return (
        <div>
            {heading}
            <h1>Namaste from functional component</h1>
            <h2>This is second h2 tag inside funct. component</h2>
        </div>
        
    );
}
const root2 = ReactDOM.createRoot(document.getElementById('root'));
root2.render(<Heading3/>);