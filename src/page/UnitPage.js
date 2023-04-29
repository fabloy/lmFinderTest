import SelectUnit from "../components/SelectUnit";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { UnitsStateContext } from "../context-component/ContextComponent";
import GoBack from "../components/GoBack";

const UnitPage = ()=>{
   const reducer = useContext( UnitsStateContext )
   const params = useParams();
   const [units, setUnits] = useState([]) 

    useEffect(()=>{
        let url = reducer.allDepartments.filter( el => el.nome === params.unitname )
        setUnits(url[0].sottoreparti)
    },[params.unitname])

    return (
        <main className="my-10" >
         <h1 className=" text-center text-2xl text-lmgreen font-semibold">{params.unitname}</h1>
         <h4 className="text-center text-slate-700 text-lg">seleziona un sottoreparto:</h4>
         <SelectUnit 
             units={units}
         />
      
         <GoBack></GoBack>
        </main>
    )
}
export default UnitPage