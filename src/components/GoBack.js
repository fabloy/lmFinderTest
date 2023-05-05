import { useContext, useEffect, useState } from "react"
import { UnitsStateContext } from "../context-component/ContextComponent"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const GoBack = ({urlPath})=>{
    const params = useParams()
    const reducer = useContext(UnitsStateContext)
    return(
        <nav className="fixed bottom-5 w-full">
        <Link 
         className="inline-block w-4/4 flex justify-center"  
         to={ urlPath ? `${urlPath}` : (params.unitname && params.subdepartment) ? `/unit/${params.unitname}` : `/`}
         >
          <button 
           className="rounded-xl p-2 w-1/5 my-5 shadow-md text-slate-100 bg-gradient-to-b from-green-400 to-green-600 hover:from-green-800 hover:to-green-950"
           onClick={()=>{
            reducer.setProductsToShow([])
            reducer.setSubdepartmentSelected([])
           }}
           >
           Back
          </button>
        </Link>
        </nav>
    )
   
}
export default GoBack