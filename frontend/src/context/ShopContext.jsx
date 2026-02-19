import { createContext, useState } from "react";

export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    const [search,setSearch]=useState("");
    const [showSearch,setShowSearch]=useState(false)
    const currency="₹";
    const delivery_fee=40;
    const value={
        currency, delivery_fee,search,setSearch,showSearch,setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;