import Units from '../reparti.json'

const getProductByOptionSelected = (inputValue, optionValue)=>{
  const reparti = Units.reparti.map( r=> r )
  let subdepartments = [];
  reparti.map(reparto =>reparto.sottoreparti.map( sottorep => subdepartments.push( sottorep ) ))
  const subdFind = subdepartments.filter( subd => subd.nome === optionValue)
  const productFind = subdFind[0].prodotti.filter( product => product.nome.toLowerCase().includes( inputValue.toLowerCase() ))
  return productFind
  
}
export default getProductByOptionSelected