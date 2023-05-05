
import { useContext, useEffect, useState } from "react"
import { UnitsStateContext } from "../context-component/ContextComponent"
import { Link } from "react-router-dom"
import getDepAndSubFromProduct from "../methods/getDepAndSubFromProd"


const ProductCardDetail = ()=>{
    const {
      productSelected, 
      allDepartments, 
      allSubdepartments, 
      departmentSelected, 
      subdepartmentSelected,
      setDepartmentSelected,
      setSubdepartmentSelected
    } = useContext(UnitsStateContext) //reducer
    const [currentDepartment, setCurrentDepartment] = useState([]);
    const [currentSubdepartment, setCurrentSubdepartment] = useState([]);

    useEffect(()=>{
      //in questo snippet vengono definiti il reparto e il sottorep. corrispondenti al prodotto selezionato
      setCurrentDepartment(
        getDepAndSubFromProduct(productSelected, allDepartments, allSubdepartments).department
        )
      setCurrentSubdepartment(
        getDepAndSubFromProduct(productSelected, allDepartments, allSubdepartments).subdepartment
      )
    
    let val = getDepAndSubFromProduct(productSelected, allDepartments, allSubdepartments)
    let departmentToSet = allDepartments.filter( dep => dep.nome===val.department )
    setDepartmentSelected(departmentToSet[0]);
    let subdepartmentToSet = departmentToSet[0].sottoreparti.filter(subd=> subd.nome=== val.subdepartment)
    setSubdepartmentSelected(subdepartmentToSet[0]);
    },[currentDepartment, currentSubdepartment])

    return(
     <div class="max-w-sm rounded overflow-hidden shadow-2xl">
       <img 
        class="w-full" 
        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
        alt="Sunset in the mountains" />
       <div class="px-6 py-4">
       <div class="font-bold text-xl mb-2">
       {productSelected.nome}
        </div>
       <p class="text-gray-700 text-base">
         prezzo: <span className="text-lmgreen font-semibold">{productSelected.prezzo}$</span>
       </p>
       <p class="text-gray-700 text-base">
       reparto: <span className="text-lmgreen font-semibold">{currentDepartment}</span>
       </p>
       <p class="text-gray-700 text-base">
       sottoreparto: <span className="text-lmgreen font-semibold">{currentSubdepartment}</span>
       </p>
     </div>
     <div class="px-6 pt-4 pb-2 text-center">
      <Link to={`/managestock/${productSelected.nome}`}>
      <span 
      class="inline-block w-full text-center bg-gray-200 rounded-md px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2">
      stock: {productSelected.stock} pz.
      </span>
      </Link>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
       venduti: {productSelected.venduti} pz.
      </span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
       rotture: {productSelected.rotture} pz.
      </span>
     </div>
    
    </div>
    )
}

export default ProductCardDetail