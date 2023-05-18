
import GoBack from "../components/GoBack";
import { useContext, useEffect, useState } from "react";
import { UnitsStateContext } from "../context-component/ContextComponent"
import Alert from "../components/minicomponents/Alert";

export default function ManageStock() {
 
 const {
  productSelected, 
  editAllDepartments, 
  departmentSelected,
  subdepartmentSelected, 
  editProductSelected, 
  allDepartments
  } = useContext(UnitsStateContext) // <--- states globali
  //state locali:
 const [newStock, setNewStock] = useState(productSelected.stock)
 const [productToShow, setProductToShow] = useState(productSelected)
 const [toggleAlert, setToggleAlert] = useState(false)
 
 
 //Funzione che aggiornane nel reducer lo state globale di productSelected e dello state locale productToShow
 const editStock = ()=>{
  editProductSelected({...productSelected, stock:newStock}) //aggiornamento state globale
  setProductToShow({...productSelected, stock:newStock}) // aggiornamento state locale
 }

 /*
 Funzione che aggiorna lo state globale del prodotto corrente con lo stock modificato 
 nell'array di tutti i reparti inserendo la modifica nel corretto array del reparto 
 e del sottoreparto corrispondente al prodotto in questione:
 */
 const updateValueInAllDepartments = ()=>{
  //modifica alldepartments:
  /*Variabile di tutti i rep. che verrà modificata per poi 
  essere pushata nell'array dello state globale di tutti i rep. "allDepartments"
  */
  let alldep = allDepartments;
  //Reparto attualmente selezionato:
  let currentDepartment = alldep?.filter(dep => dep.nome === departmentSelected.nome)
  //Sottoreparto alìttualmente selezionato:
  let currentSubdepartment = currentDepartment[0]?.sottoreparti.filter( sub => sub.nome === subdepartmentSelected.nome)
  //Prodotti attualmente presenti nel sottorep. sleelzionato:
  let currentProducts = currentSubdepartment[0]?.prodotti;
  /* 
  Modifica dell'array dei prodotti attualmente presenti nel sottorep.
     con lo scopo di aggiornare lo stock appena modificato del prodotto selezionato:
  */
  currentProducts = currentProducts?.map(prod => prod.nome === productSelected.nome ? prod={...prod, stock:productSelected.stock} : prod=prod)
  /* 
  Modifica dell'array allDep ovvero aggiornamento dello stock del prodotto selezionato,
  per poi pusharlo nello state globale di tutti i reparti.
  */
  alldep.map( dep =>{
    return dep.sottoreparti.map( sub =>{
     return sub.nome === currentSubdepartment[0]?.nome ? sub.prodotti = currentProducts : sub.prodotti = sub.prodotti
    })
  })
  //aggiornamento dello state globale di tutti i reparti :
  editAllDepartments(alldep)
 }

const hideAlert = ()=>{
  setToggleAlert(false)
}

 useEffect(()=>{
  updateValueInAllDepartments()
  window.setTimeout(hideAlert, 2500)
  },[departmentSelected, subdepartmentSelected, productToShow])

return (
     <>
     <Alert 
      visible={toggleAlert}
      title="Stock rettificato: "
      msg={` ${productSelected.stock}pz.`}
     />
     <div className="p-10 flex flex-col">
        <label htmlFor="stock" className="block text-sm font-medium leading-6 text-gray-900">
          Stock di <span className="text-lmgreen">{productToShow.nome}</span>
        </label>
        <div className="relative mt-2 mb-4 rounded-md shadow-sm mx-auto lg:w-1/4">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm inline-block mr-1 ">
                Pz.
            </span>
          </div>
          <input
            type="number"
            name="stock"
            id="stock"
            className="block w-full  mx-auto rounded-md border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lmgreen sm:text-sm sm:leading-6 lg:pr-1"
            placeholder={newStock}
            onChange={(e)=> setNewStock( Number( e.target.value ) ) }
          />
          
        </div>
        <button 
         class="
          rounded-lg bg-gradient-to-b p-2 text-white mx-auto 
          bg-size-200 bg-gradient-to-t to-green-800  from-green-400 hover:bg-right-bottom transition-all duration-500"
         onClick={()=>{
          editStock()
          setToggleAlert(true)
        }}       
         >
         Modifica
        </button>
     </div>
     
     <GoBack 
      urlPath={ `/productdetail/${productToShow.nome}`}
     />
    </>
    )
  }