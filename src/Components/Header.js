const Website_title =()=>
{
    return (
        <h2 className="website_name">Aunty's Kitchen</h2>
    )
    
}
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

export default Header