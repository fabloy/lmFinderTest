
import { useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { UnitsStateContext } from "../../context-component/ContextComponent"

const Unit = ({unitDetail, url})=>{
 const reducer = useContext( UnitsStateContext ) 
 let params = useParams()

 return (
     
         <li
          className=" w-2/3 border-2 py-7 text-center 
          rounded-lg bg-lmgreen text-white text-xl my-1 font-semibold drop-shadow-lg
          hover:bg-green-500 active:bg-green-500"
          onClick={ ()=>{
             params.unitname === undefined && reducer.setDepartmentSelected(unitDetail);
             params.unitname !== undefined && reducer.setSubdepartmentSelected(unitDetail);
          }}
         >
          <Link to={url} >
          {unitDetail.nome}
          </Link>
         </li>
    )
}

export default Unit