import { useContext } from "react"
import { UnitsStateContext } from "../context-component/ContextComponent"
import GoBack from "../components/GoBack";
import ProductCardDetail from "../components/ProductCardDetail";

const ProductDetail= ()=>{
    const {productSelected} = useContext(UnitsStateContext) //reducer

    return (
        <section className="flex justify-center p-5 h-full">
        <ProductCardDetail />
        <GoBack />
        </section>
    )
}

export default ProductDetail