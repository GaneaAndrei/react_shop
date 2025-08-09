import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from"../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps={
    id:number 
    quantity:number
}
export function CartItem({id,quantity}:CartItemProps){
    const {removeFromCart}=useShoppingCart()
    const item=storeItems.find(i=> i.id===id)
    if(item==null) return null

    return (
        <div className="flex gap-2 items-center">
            <img src={item.imgUrl} 
            alt={item.name} 
            style={{width:"125px",height:"75px",objectFit:"cover"}}/>
            <div className="">
                <p>{item.name} {quantity >1 && <span>{quantity}x </span>}</p>
                <p>{formatCurrency(item.price)}</p>
            </div>
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
            <button onClick={()=>removeFromCart(item.id)}>X</button>
        </div>
    )
}