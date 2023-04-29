import { Fragment, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const Input = ({getValueInput})=>{
 let productSearched = useRef();
 let params = useParams()


 return(
    <Fragment>
     <label 
      for="product" 
      class="text-center block text-bold leading-6 text-gray-900">
      Cerca un prodotto:
     </label>
     
     <input 
        id="product"
        placeholder="nome prodotto"
         type="text"  
         className="text-center mx-auto block w-2/3 font-medium rounded-md border-0 py-1.5 text-lmgreen shadow-sm ring-1 ring-inset ring-lmgreen placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lmgreen focus:outline-none sm:text-sm sm:leading-6"
         ref={productSearched} 
         onChange={()=>getValueInput(productSearched.current.value)
      }/>
    </Fragment>
  
    )
}
export default Input