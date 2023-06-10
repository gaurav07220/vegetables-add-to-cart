import axios from "axios";
import { createContext, useEffect, useState } from "react";


const ProductContext = createContext();
const API = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'

const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([])  // all vegetalbes data should be store in products state variable

    useEffect(() => {
        axios
        .get(API)
        .then(response=>{
            setProducts(response.data)
        })

    }, [])

    return <ProductContext.Provider value={products}>
        {children}
    </ProductContext.Provider>
}

export { ProductContext, ProductProvider }