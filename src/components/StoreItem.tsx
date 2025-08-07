import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
type StoreItemProps={
    id:number
    name:string
    price:number
    imgUrl:string
}

export function StoreItem({id,name,price,imgUrl}:StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    }=useShoppingCart()
    const quantity=getItemQuantity(id);
    return(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mt-4">
            <div>
            <img src={imgUrl} alt={name}  className="rounded-t-lg h-52 object-cover w-full"/>
            </div>
            <div className="flex flex-col justify-between">
                <div className="p-4 flex justify-between items-center mb-4">
                    <span>{name}</span>
                    <span>{formatCurrency (price)}</span>
                </div>
                <div className="mx-2">
                    {quantity === 0 ?(
                        <button onClick={() => increaseCartQuantity(id)} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm">
                            + Add to cart
                        </button>
                    ):
                    <div className="flex flex-col items-center gap-0.5 ">
                        <div className="flex items-center justify-center gap-0.5">
                                <button onClick={() => decreaseCartQuantity(id)} className="w-8 h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm">-</button>
                                <span>{quantity} in cart</span>
                                <button onClick={()=> increaseCartQuantity(id)} className="w-8 h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm">+</button>
                        </div>
                        <button onClick={() => removeFromCart(id)} className="text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:ring-red-400 font medium rounded-lg text-sm w-16 ">
                            Remove
                        </button>
                    </div>}
                </div>
            </div>
        </div>
        
    )
}