
import { useContext, useEffect, useState } from "react";
import { UnitsStateContext } from "../context-component/ContextComponent";
import { Link } from "react-router-dom";

const ProductsBySubdepartment = ()=>{
  const reducer = useContext( UnitsStateContext )
  const [products, setProducts] = useState(reducer.productsToShow)

  useEffect(()=>{
    setProducts(reducer.productsToShow)
   
  },[products])
 
 return(
      <div>
       <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:py-16 lg:max-w-7xl lg:px-8">
        <ul className=" mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
         {
          reducer.productsToShow?.map((p,index)=>
          <li 
           key={index}
           onClick={()=> reducer.setProductSelected(p)}
           className="rounded-lg shadow-lg  bg-slate-100 border border-slate-400 hover:border-lmgreen hover:shadow-green-300 hover:shadow-md"
           >
           <Link className="group" to={ `/productdetail/${p.nome}`}>
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
             <img src="https://www.tecnomat.it/pub/media/catalog/product/d/3/6/a/lastra_cartongesso_fassa_ba_x_x_cm_10022940_picture.JPG?auto=webp&quality=100&format=jpeg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." />
            </div>
           <h3 class="m-2  text-sm text-gray-700">
            {p?.nome} 
           </h3>
           <p class="m-2  text-lg font-medium text-gray-900">
            {p?.prezzo}$
           </p>
           </Link>
          </li>
          )
         }
        </ul>
        </section>
        
      </div>
    )
}

export default ProductsBySubdepartment