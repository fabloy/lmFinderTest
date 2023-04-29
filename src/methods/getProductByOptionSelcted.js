import Units from '../reparti.json'

/* BISOGNA ANCORA GESTIRE IL CASO IN CUI NON è STATO SELEZIONATO NESSUN SOTTOREPARTO 
E L'OPTION è IMPOSTATO SU "TUTTI" */

const getProductByOptionSelected = (inputValue, optionValue)=>{
  const reparti = Units.reparti.map( r=> r )
  let subdepartments = [];
  reparti.map(reparto =>reparto.sottoreparti.map( sottorep => subdepartments.push( sottorep ) ))
  const subdFind = subdepartments.filter( subd => subd.nome === optionValue)
  const productFind = subdFind[0].prodotti.filter( product => product.nome.includes( inputValue))
  return productFind
  
}
export default getProductByOptionSelected