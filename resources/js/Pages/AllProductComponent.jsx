import React from "react";
import ProductComponent from "./ProductComponent";

export default function AllProductComponent(){
    const product = {
        Name: 'First Product',
        Price: 200,
        Stock: 'InStock'
    }
    return(
        <>
            <ProductComponent product={product} />
        </>
    )
}