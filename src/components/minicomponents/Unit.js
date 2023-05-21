
import { useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { UnitsStateContext } from "../../context-component/ContextComponent"

const Unit = ({unitDetail, url})=>{
 const reducer = useContext( UnitsStateContext ) 
 let params = useParams()

 return (
   <Link to={url} 
    className="
    block w-2/3 border-2 py-7 text-center 
    rounded-lg bg-size-200 bg-gradient-to-b to-green-800  from-green-400 hover:bg-right-bottom transition-all duration-500 
  text-white text-xl my-1 font-semibold drop-shadow-lg
  active:bg-green-500 
    md:mx-1 md:w-2/5 lg:w-1/5 lg:hover:w-1/4 lg:bg-gradient-to-t"
   >
         <li
          onClick={ ()=>{
             params.unitname === undefined && reducer.setDepartmentSelected(unitDetail);
             params.unitname !== undefined && reducer.setSubdepartmentSelected(unitDetail);
          }}
         >
         
          {unitDetail.nome}
         
         </li>
          </Link>
    )
}

export default Unit