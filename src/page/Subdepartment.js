
import Input from "../components/minicomponents/Input"
import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from "react"
import AllProducts from "../components/AllProducts"
import ProductsBySubdepartment from "../components/ProductBySubdepartment"
import getValueOfInput from "../methods/getValueofInput"
import getProductByOptionSelected from "../methods/getProductByOptionSelcted"
import { useContext } from "react"
import { UnitsStateContext } from "../context-component/ContextComponent"
import getAllProducts from "../methods/getAllProducts";
import GoBack from "../components/GoBack";

import SelectInputComponent from "../components/minicomponents/SelectInputComponent";

const Subdepartment = ()=>{
  const reducer = useContext( UnitsStateContext ) //state globale
  const params = useParams()
  const [prodToShow, setProdToShow] = useState([]) //state locale
  const [currentSubdepartment, setCurrentSubdepartment] = useState()

  useEffect(()=>{
    if(!params.unitname && !params.subdepartment){
      reducer.setProductsToShow(getAllProducts().allProducts)
      setProdToShow(reducer.productsToShow)
    }else{
     /* altrimenti se i params  sono settati mostrami tutti i prodotti esistenti 
     nel sottoreparto selezionato*/
     let subdepartmentFind = reducer.allSubdepartments().filter(s=>s.nome===params.subdepartment);
     setCurrentSubdepartment(subdepartmentFind[0])
     reducer.setSubdepartmentSelected(subdepartmentFind[0])
    //  setProdToShow( reducer.subdepartmentSelected.prodotti )
     reducer.setProductsToShow( reducer.subdepartmentSelected.prodotti )
     console.log("else")
    }
    
  },[])

    return(
        <main>
         <aside 
          className="textdefault my-5 m-auto leading-8 ">
         { 
          params.unitname && <p>
           Reparto: 
           <span className="m-2 text-lmgreen font-semibold text-lg">
            {`${params?.unitname}`}
           </span>
          </p>
         }
         
         <p className="inline-block">
          Sottoreparto: 
         </p> 
          { !params.unitname && !params.subdepartment ? 
          <SelectInputComponent 
           subdSelected={(subdepartmentValue)=>{
            let subdepartmentFind = reducer.allSubdepartments().filter(s=>s.nome===subdepartmentValue);
            setCurrentSubdepartment(subdepartmentFind[0])
            setProdToShow( reducer.productsToShow )
          }} 
          /> 
          :
          <span className=" m-2 text-lmgreen font-semibold text-lg">
            {`${params?.subdepartment}`}
          </span>
        }
        
         </aside>
         
         <Input 
              getValueInput={(e)=>{
                if(reducer.subdepartmentSelected===undefined || reducer.subdepartmentSelected.length<=0){
                  let productsFind = getValueOfInput(e, params)
                  reducer.setProductsToShow(productsFind)
                  setProdToShow( reducer.productsToShow )
                }else{
                  let productsFind = getProductByOptionSelected( e, reducer.subdepartmentSelected.nome)
                  reducer.setProductsToShow(productsFind)
                  setProdToShow(reducer.productsToShow)
                }
              }
              }
         />
            {
             (params.unitname && params.subdepartment) ? <AllProducts /> : <ProductsBySubdepartment/>
            }
         <GoBack />
        </main>
    )
}
export default Subdepartment