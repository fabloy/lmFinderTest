
import SelectUnit from '../components/SelectUnit';
import { useContext, useEffect, useState } from 'react';
import Units from '../reparti.json'
import Unit from '../components/minicomponents/Unit';
import { Link } from 'react-router-dom';
import { UnitsStateContext } from "../context-component/ContextComponent"

const Home = ()=>{
    const reducer = useContext( UnitsStateContext ) 
    const [units, setUnits] = useState([])
    
    useEffect(()=>{
        setUnits( reducer.allDepartments )
     },[units])

    return (
        <main className='my-5 bg-white p-5 w-full min-h-80vh'>
            <div className='w-full'>
                <h4 className=' text-center text-2xl text-lmgreen font-semibold'>Cerca prodotto</h4>
                <h3 className='text-center text-slate-700 text-lg'>seleziona il tipo di reparto</h3>
             <ul className='w-full px-2 my-5 flex flex-col justify-center items-center'>
             {
              units.map(unit=> <Unit unitDetail={unit} url={`/unit/${unit.nome}`}/>)
             }
             </ul>
            </div>
            
            <section className='w-full fixed bottom-5 left-0 flexdefault '>
             <button className='rounded-lg p-2 w-1/3 shadow-md text-slate-100 bg-gradient-to-b from-green-400 to-green-600 hover:from-green-800 hover:to-green-950' >
              <Link to={`/searchall`} > 
               Tutti i prodotti
               </Link>
              </button>
            
            </section>
         
            
        </main>
    )
}
export default Home