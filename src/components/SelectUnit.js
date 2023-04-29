
import { useParams } from 'react-router-dom'
import Unit from '../components/minicomponents/Unit'


const SelectUnit = ({units})=>{
  const params = useParams()
 
    return(
        <ul id='selectUnitWrapper' className='flexdefault' >
          {units.map(unit=> <Unit unitDetail={unit}  url={`/unit/${params.unitname}/${unit.nome}`} />)}
        </ul>
    )
}

export default SelectUnit