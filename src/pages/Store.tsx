
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store(){
    return (
    <>
    <h1>Store</h1>
    <div className="grid justify-center  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        {storeItems.map(item=>(
            <StoreItem key={item.id}{...item}/>
        ))}
    </div>
    </>
    )

}