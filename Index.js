import React from "react"
import ReactDOM from "react-dom/client"

// ==================================creating element using javascript===============================================================
// # creatingelements in react using React.createElement()

// const heading1 = React.createElement('h1', {id:'title'}, 'Root-> container-> h1 I have Ignited the react app');
// const heading2 = React.createElement('h1',{id:'title2'}, 'Root-> container-> h2');
// const div2 = React.createElement('div', {id:'container'}, [heading1, heading2]);


// ===================== using JSX and functional components ========================================================================

// const heading = (<h1 id="container">Hello from JSX and babel in react element</h1>);    // called as JSX Expression
// const heading2 = <h3>Hello from heading2 another heading tag created using JSX</h3>

// const Heading3 =()=>
// {
//     return (
//         <div>
//             {heading}
//             {heading2}
//             <heading/>
//             <h1>Namaste from functional component</h1>
//             <h2>This is second h2 tag inside funct. component</h2>
//         </div>
        
//     );
// }

// ================================== # This is Inline CSS in components / react====================================================

// const In_Line_CSS = ()=>
// { 
//     return (
//         <div className="InLineCSS" style={
//             {
//                 backgroundColor: "yellow",
//                 color: "purple",
//                 fontWeight:"500"
//             }
//         }><h2>This is inline CSS</h2></div>
//     )
    
// }

// ==============================================================================================================
const Header = () =>
{
    return  (
        
        <div>
            <div className="navbar">
                <div className="logo"><img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGndx19Dehe1qY2ZDX0Q2zFMRxb5QjOp4H5vIV30gPkq7ECVPwFJyElPSZpGNdA-fn-w&usqp=CAU" alt="logo" /></div> 
                <div className="web_title">
                    <Website_title/>
                    <img className="thali" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0svnqn9Anh0RAqVtyuCk-RMSYuJ5oCIxyxQ&usqp=CAU" alt="" />
                    </div>   
                <div className="nav_links">
                    <a href="">About</a>
                    <a href="">Home</a>
                    <a href="">Contact Us</a>
                    <a href="">Cart</a>
                </div>
            </div>
        </div>
    )   
}
const Website_title =()=>
{
    return (
        <h2 className="website_name">Aunty's kitchen</h2>
    )
    
}

const Body = () =>
{
    return (
        <h1>This is body</h1>
    )
}
const Card =()=>
{
    
}

const Footer = () =>
{
    return (
        <h1>This is footer</h1>
    )
}
const Applayout = ()=>
{
    return (/*
        header
         -nav bar
            - logo
            - links
            - cart
        body 
         - Search Bar
         - RestaurantList
            - cRestaurantard
                - img
                - restaurant name
                - rating 
                - reviews
        footer 
         - links
        */

    // Here comes Reacts Fragments --> component can have only one partent element to avoid the errors we use react fragments
       <>
       <Header/>
       <Body/>
       <Footer/>
       </>
       
       

    )
}

const root2 = ReactDOM.createRoot(document.getElementById('root'));
root2.render(<Applayout/>);