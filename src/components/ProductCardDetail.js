
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
     <div class="mx-auto rounded overflow-hidden shadow-2xl border border-slate-400 
       md:flex md:flex-row  md:justify-center md:overflow-visible lg:w-3/4 lg:max-w-3xl lg:mt-8">
       <img 
        class="max-h-50% w-3/5 mx-auto md:max-h-fit md:max-w-md md:h-full md:block lg:w-2/4" 
        src="https://www.tecnomat.it/pub/media/catalog/product/d/3/6/a/lastra_cartongesso_fassa_ba_x_x_cm_10022940_picture.JPG?auto=webp&quality=100&format=jpeg"
        alt="Sunset in the mountains" />
        <hr />
      <aside className="flex flex-col justify-around lg:w-2/4 border border-slate-200">
       <div class="px-6 lg:h-fit">
       <div class="font-bold text-xl mb-2 mt-2">
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
     <div class="px-6 pt-4 pb-2 text-center lg:h-fit ">

      <span class="inline-block w-full bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
       venduti: {productSelected.venduti} pz.
      </span>
      <span class="inline-block w-full bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
       rotture: {productSelected.rotture} pz.
      </span>

      <p className=" text-sm text-gray-700">Stock:</p>
      <Link to={`/managestock/${productSelected.nome}`}>
      <span 
      class="
      bg-size-200 bg-gradient-to-t to-green-800  from-green-400 hover:bg-right-bottom transition-all duration-500
      w-full inline-block text-center rounded-md px-3 py-2 text-sm font-bold text-gray-100 mr-2 mt-2
      ">
      {productSelected.stock} pz.
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 inline-block">
       <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
       </svg>
      </span>
      </Link>
     </div>
     </aside>
    </div>
    )
}

export default ProductCardDetail