
import { useContext, useEffect, useState } from "react"
import { UnitsStateContext } from "../context-component/ContextComponent"
import { Link } from "react-router-dom"

const AllProducts = ()=>{
  const reducer = useContext(UnitsStateContext)
  const { productsToShow } = useContext(UnitsStateContext)
  const [light, setLight]= useState(false)


   
  return(
      <section className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:py-9 lg:max-w-7xl lg:px-8">
        <ul 
        className={`mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 xl:gap-x-8 `}
        >
         {
          productsToShow?.map( prod => 
          <li 
           onClick={()=> reducer.setProductSelected(prod)}
           className={`w-3/4 mx-auto rounded-lg shadow-md shadow-slate-400  bg-slate-100 border border-slate-400 hover:border-lmgreen hover:shadow-green-300 hover:shadow-md lg:w-full`}
           >
           <Link className="group" to={ `/productdetail/${prod.nome}`}>
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border border-slate-100 ">
             <img src="https://www.tecnomat.it/pub/media/catalog/product/d/3/6/a/lastra_cartongesso_fassa_ba_x_x_cm_10022940_picture.JPG?auto=webp&quality=100&format=jpeg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." 
              class="h-full w-full object-cover object-center group-hover:opacity-75 border-b border-slate-300" />
            </div>
           <h3 class="m-2 text-sm text-gray-700">
            {prod?.nome} 
           </h3>
           <p class="m-2 text-lg font-medium text-gray-900">
            {prod.prezzo}$
           </p>
           </Link>
          </li>
          )
         }
        </ul>
        </section>
    )
}

export default AllProducts