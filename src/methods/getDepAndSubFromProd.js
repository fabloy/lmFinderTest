
/*questa funzione partendo da un prodotto dato, da un array di tutti i reparti e 
uno di tutti i sottoreparti restituisce il nome del reparto e del sottoreparto corrispondetne
al prodotto passato come argomento */

const getDepAndSubFromProduct = (productSelected, allDepartments, allSubdepartments)=>{
// nuovo oggetto che restituirà il nome del reparto e del sottoreparto dell'oggetto dato.  
let newObj = {} 

    /** In questo snippet viene iterato l'array di tutti i sottoreparti 
     * ad ogni giro viene preso ogni singolo prodotto dell'araay prodotti e
     * viene pushato nel nuovo oggetto newObj inoltre a quest'ultimo viene
     * anche aggiunta la chiave sottorep che conterrà il nome del sottoreparto
     */
    allSubdepartments().map( s => s.prodotti.map( p=>{
     if(p.nome.toLowerCase() === productSelected.nome.toLowerCase()){
     return newObj = {...p, sottorep: s.nome}
     }
     return
    }
    ))
   
    /*
    partendo dall'array contenente tuti i reparti, viene fatta un iterazione che
   restituisce il nome del raprto corrispondente all'oggetto passato come argomento.
    */
   allDepartments.map( dep =>{
     return dep.sottoreparti.map( s=>{
      if(s.nome === newObj.sottorep){
       newObj = {...newObj, rep: dep.nome}
      }
    } )
    })
   
    return {department: newObj.rep, subdepartment: newObj.sottorep}
   }


export default getDepAndSubFromProduct