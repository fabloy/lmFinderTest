
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
        localStorage.removeItem("searchAll");
      
     },[units])

    return (
        <main className='my-5 bg-white p-5 w-full min-h-80vh mx-auto'>
            <div className='w-full'>
                <h4 className=' text-center text-2xl text-lmgreen font-semibold'>Cerca prodotto</h4>
                <h3 className='text-center text-slate-700 text-lg'>seleziona il tipo di reparto</h3>
             <ul 
             className='
              w-full px-2 my-5 flex flex-col justify-center items-center 
              lg:flex-row lg:w-3/4 lg:mx-auto lg:flex-wrap '
              >
             {
              units.map(unit=> <Unit unitDetail={unit} url={`/unit/${unit.nome}`}/>)
             }
             </ul>
            </div>
            
            <section className='w-full fixed bottom-5 left-0 flexdefault md:relative md:my-11'>
             <Link
              /*
              per far funzionare il transition sul bacground color
              c'è bisogno di dare un bg-size maggiore del 100% dell'elemento per poi quando avviene l'hover
              spostare il bg con ad esempio bg-right-bottom che te lo sposta a destra in basso.
              */
              className=' block
              rounded-lg p-2 w-1/3 shadow-md text-slate-100 text-center 
              bg-size-200 bg-gradient-to-t to-green-800  from-green-400 hover:bg-right-bottom transition-all duration-500
              sm:w-1/6 sm:rounded-md lg:hover:py-3' 
              to={`/searchall`} 
              onClick={()=>localStorage.setItem("searchAll", "true")}
              > 
              
               Tutti i prodotti
              
              </Link>
            </section>
         
            
        </main>
    )
}
export default Home