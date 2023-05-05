import { useContext, useEffect, useState } from "react"
import { UnitsStateContext } from "../context-component/ContextComponent"
import GoBack from "../components/GoBack";
import ProductCardDetail from "../components/ProductCardDetail";
import getDepAndSubFromProduct from "../methods/getDepAndSubFromProd";
//in questo coponente prova a creare degli state per il reparto e il sottorpearto e aggiornare gli state

const ProductDetail= ()=>{
    const {productSelected,setSubdepartmentSelected,setDepartmentSelected, subdepartmentSelected, departmentSelected, allDepartments, allSubdepartments} = useContext(UnitsStateContext) //reducer
    const [currentDepartment, setCurrentDepartment] = useState( getDepAndSubFromProduct(productSelected, allDepartments, allSubdepartments).department)
    const [currentSubdepartment, setCurrentSubdepartment] = useState(getDepAndSubFromProduct(productSelected, allDepartments, allSubdepartments).subdepartment)
    useEffect(()=>{
    //  let currentSubd = getDepAndSubFromProduct(productSelected, allDepartments, allSubdepartments).subdepartment
    //  let currentDep = getDepAndSubFromProduct(productSelected, allDepartments, allSubdepartments).department
    //  let newDepToAdd = allDepartments?.filter(dep=>dep.nome===currentDep)
    //  setDepartmentSelected(newDepToAdd[0])
    //  let newSubdepToAdd = newDepToAdd[0]?.sottoreparti.filter(s=>s.nome===currentSubd)
    //  setSubdepartmentSelected(newSubdepToAdd[0])
     },[currentDepartment, currentSubdepartment])
     
    return (
        <section className="flex justify-center p-5 h-full">
         <ProductCardDetail />
         <GoBack 
          urlPath={localStorage.getItem("searchAll")==="true" ? `/searchall` : `/unit/${currentDepartment}/${currentSubdepartment}`}
         />
        </section>
    )
}

export default ProductDetail