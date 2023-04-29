import Units from '../reparti.json'
const getAllProducts = ()=>{
 const allUnits = Units.reparti;
 let subdepartments = []; //array contente tutti gli oggetti dei sottoreparti
 let allProducts = []; //array contente tutti gli oggetti dei prodotti di ogni sottoreparto
 
 //iterazione del push di tutti gli oggetti sottoreaprto:
 allUnits.map(el=> subdepartments.push( ...el.sottoreparti ) ) 

 //iterazione del push di tutti i prodotti esistenti in ogni sottoreparto 
 subdepartments.map( subd => allProducts.push( ...subd.prodotti ))
 
 return { subdepartments, allProducts}
}
export default getAllProducts