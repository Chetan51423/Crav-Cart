import { useSelector } from "react-redux"
import Cart_Item from "./Cart_Item";



const Cart = ()=>
{
    const cartItems = useSelector(Store => Store.cart.items)
    return (
        <>
            <div className="my-auto font-bold ">
                <div className="flex flex-wrap">
                    {
                        cartItems.map((cartItems)=>
                             <Cart_Item key={cartItems.id} {...cartItems}/>
                        )
                    }
                </div>
                
            </div>
        </>
        
    )
}

export default Cart