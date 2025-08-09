import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartiItem"
import storeItems from"../data/items.json"
type ShoppingCartProps={
    isOpen:boolean
}

export function ShoppingCart({isOpen}:ShoppingCartProps){
    const {closeCart,cartItems}=useShoppingCart()
    return(
        <div className={"fixed top-0 right-0 h-screen w-80 m-0 flex flex-col bg-gray-400 shadow-lg transform ease-in-out" + (isOpen?"transition-opacity opacity-100 duration-500 translate-x-0":
        "transition-all duration-500 opacity-0 translate-x-full")}>
            <div className="flex justify-between">
                <h3 className="">Cart</h3>
                <button onClick={closeCart} className=" bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Close</button>
            </div>
        {cartItems.map(item=>(
            <CartItem key={item.id}{...item}/>
        ))}
            <div className="mx-auto">
                <p>Total {formatCurrency(cartItems.reduce((total,cartItem)=>
                {const item=storeItems.find(i=> i.id===cartItem.id)
                return total +(item?.price || 0)*cartItem.quantity},0))}</p>
            </div>
        </div>
    )
}