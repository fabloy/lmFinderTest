import { Fragment, useEffect } from "react";
import getAllProducts from "../../methods/getAllProducts";
import { useContext, useState } from "react";
import { UnitsStateContext } from "../../context-component/ContextComponent";

const SelectInputComponent = ({subdSelected})=>{
  const reducer = useContext( UnitsStateContext );

  useEffect(()=>{
  console.log(reducer.allSubdepartments())
  
  },[])

  //funzione che in base al sottoreparto selezionato nella option setta i prodotti da msotra
  //ovvero tutti i prodotti del sottoreparto selezionato:
   const getProductsBySubdepartment = (subdepartment)=>{
    let subdepartmentSelected = reducer.allSubdepartments().filter( subd => subd.nome === subdepartment)
    reducer.setSubdepartmentSelected(subdepartmentSelected)
    subdepartmentSelected.length>0 ? reducer.setProductsToShow(subdepartmentSelected[0].prodotti) : reducer.setProductsToShow( getAllProducts().allProducts) //
   }

  return(
        <aside className="" >
         <label for="subdepartment"></label>
         <select 
         className="rounded ring-inset focus: ring-lmgreen text-lmgreen p-2 font-semibold uppercase text-center "
          id="subdepartment"
          onChange={(e)=>{
          getProductsBySubdepartment(e.target.value)
          subdSelected(e.target.value)
          }}
         >
          <option value="tutti">Tutti</option>
           {
           
           reducer.allSubdepartments().map( subd => <option 
            value={subd?.nome}
           >
           {subd?.nome}
          </option>
          )
          }
         </select>
        </aside>
    )
}
export default SelectInputComponent