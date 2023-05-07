import { Fragment, useEffect } from "react";
import getAllProducts from "../../methods/getAllProducts";
import { useContext, useState } from "react";
import { UnitsStateContext } from "../../context-component/ContextComponent";

const SelectInputComponent = ({subdSelected})=>{
  const reducer = useContext( UnitsStateContext );

  //funzione che in base al sottoreparto selezionato nella option setta i prodotti da msotra
  //ovvero tutti i prodotti del sottoreparto selezionato:
   const handleProductsBySubdepartment = (subdepartment)=>{
    let subdepartmentSelected = reducer.allSubdepartments().filter( subd => subd.nome === subdepartment)
    reducer.setSubdepartmentSelected(subdepartmentSelected[0])
    subdepartmentSelected.length>0 ? reducer.setProductsToShow(subdepartmentSelected[0].prodotti) : reducer.setProductsToShow( getAllProducts().allProducts) //
 }

 //funzione che modifica il reparto selezionato nello state globale definendolo in base al sottoreparto 
 //selezionato con l'onChange event della select
  const handleDepartmentSelected = ()=>{
    reducer.allDepartments.map( dep => dep?.sottoreparti.map( sub =>{
      if(sub?.nome === reducer.subdepartmentSelected?.nome){
        reducer.setDepartmentSelected(dep)
      }
    }))
  }

  return(
        <aside className="" >
         <label for="subdepartment"></label>
         <select 
         className="rounded ring-inset focus: ring-lmgreen text-lmgreen p-2 font-semibold uppercase text-center "
          id="subdepartment"
          onChange={(e)=>{
          handleProductsBySubdepartment(e.target.value)
          subdSelected(e.target.value)
          handleDepartmentSelected()
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