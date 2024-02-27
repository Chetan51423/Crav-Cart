import { useSelector } from "react-redux"
import Cart_Item from "./Cart_Item";



const Cart = ()=>
{
    const cartItems = useSelector(Store => Store.cart.items)
    return cartItems.length==0 ? (
        
        <div className="mx-16 my-auto p-12 bg-orange-300 rounded-2xl shadow-2xl">
             
            <div className="flex  flex-col justify-center items-center">
                 {/* <div className="w-40 h-40">
                    <img className="rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGndx19Dehe1qY2ZDX0Q2zFMRxb5QjOp4H5vIV30gPkq7ECVPwFJyElPSZpGNdA-fn-w&usqp=CAU" alt="logo" />
                 </div>  */}
                <h1 className="text-4xl font-medium">Cart is Empty! Please Select some items.  </h1>
            </div>
        </div>

        ): (
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