import { useContext, useEffect, useState } from "react"
import { UnitsStateContext } from "../context-component/ContextComponent"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const GoBack = ({urlPath})=>{
    const params = useParams()
    const reducer = useContext(UnitsStateContext)
    const [isScrolling, setIsScrolling] = useState(false)
    const handleScrolling = ()=>{
        setIsScrolling(true)
        

        // Imposta un timer per verificare l'inattività dello scroll dopo 1 secondo
         setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
     }

    useEffect(()=>{
        window.addEventListener("scroll",handleScrolling)
        return()=>{
         window.removeEventListener("scroll",handleScrolling)
        } 
    },[])

    return(
        <nav 
         className={
          `
          fixed bottom-0 border-t border-slate-300 rounded w-full lg:right-2/4 lg:translate-x-2/4 p-2 bg-slate-200 bg-opacity-60 transition-all easy-in duration-500
          ${isScrolling ? 'bg-opacity-0' : ''}
          `
          }
         >
        <Link 
         className={`inline-block w-4/4 flex justify-center `}  
         to={ urlPath ? `${urlPath}` : (params.unitname && params.subdepartment) ? `/unit/${params.unitname}` : `/`}
         >
          <button 
           className="rounded-2xl p-3 shadow-md text-slate-100 bg-size-200 bg-gradient-to-t to-green-800  from-green-400 hover:bg-right-bottom transition-all duration-500"
           onClick={()=>{
            reducer.setProductsToShow([])
            reducer.setSubdepartmentSelected([])
           }}
           >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6mx-auto">
           <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
           </svg>
        </button>
        </Link>
        </nav>
    )
   
}
export default GoBack