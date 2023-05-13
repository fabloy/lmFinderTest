import Units from '../reparti.json'
import getAllProducts from './getAllProducts';

const getValueOfInput = (inputValue, params)=>{
    let unitToFind;
    let subdepartmentToFind;
    if(params.unitname){
     //se il reparto è selezionato ma non il sottoreparto
     unitToFind = Units.reparti.filter( rep =>  rep.nome === params.unitname )
     unitToFind = unitToFind[0]
     //da definire il return...
    } 
    if(params.unitname && params.subdepartment){
     //se il reparto e anche il sottoreparto sono selezionati
     subdepartmentToFind = unitToFind.sottoreparti.filter(sub => sub.nome === params.subdepartment);
     subdepartmentToFind = subdepartmentToFind[0];
     let prodFind = subdepartmentToFind.prodotti.filter( product => product.nome.includes(inputValue) )
     return prodFind
   }else{
    //
    let allProducts = getAllProducts().allProducts
    let prodFind =  allProducts.filter( product =>{
      return product.nome.toLowerCase().includes( inputValue.toLowerCase() )
    }  )
    return prodFind
   }
 
 }
 export default getValueOfInput