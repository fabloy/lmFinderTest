
import { useParams } from 'react-router-dom'
import Unit from '../components/minicomponents/Unit'


const SelectUnit = ({units})=>{
  const params = useParams()
 
    return(
        <ul 
        id='selectUnitWrapper' 
        className='
        flexdefault mx-auto
        lg:flex-row lg:w-3/4 
        ' 
        >
          {units.map(unit=> <Unit unitDetail={unit}  url={`/unit/${params.unitname}/${unit.nome}`} />)}
        </ul>
    )
}

export default SelectUnit