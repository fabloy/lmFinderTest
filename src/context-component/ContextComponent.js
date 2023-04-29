
import { createContext} from 'react';

import Units from '../reparti.json'
import getAllProducts from '../methods/getAllProducts';

export const UnitsStateContext = createContext()
const reducer = {
    //proprietà che mostra tutti i reparti esistenti:
    allDepartments: Units.reparti , 
    editAllDepartments: (newArray)=>{
     reducer.allDepartments = newArray
    },
    
    //proprietà che mostra tutti i prodotti esistenti:
    allProducts: ()=>{
        reducer.allDepartments.map( d => d.sottoreparti.map( s => s.prodotti))
    }, 

    // proprietà che mostra tutti i sottoreparti esistenti:
    // allSubdepartments: getAllProducts().subdepartments,
    allSubdepartments: ()=>{
        let result=[]
        reducer.allDepartments.map(dep=> result.push(...dep.sottoreparti))
        return result
    },

    departmentSelected:[],
    setDepartmentSelected: (department)=>{
        reducer.departmentSelected = department
        reducer.subdepartmentSelected = {}
    },

    subdepartmentSelected:[],
    setSubdepartmentSelected: (subdepartment) => reducer.subdepartmentSelected = subdepartment,
    
    productsToShow:[],
    setProductsToShow:( productsToShowUpdates )=> {
     reducer.productsToShow = productsToShowUpdates
    },

    productSelected:{},
    setProductSelected: (newProduct) => reducer.productSelected = newProduct,
    
    editProductSelected: (newProduct) =>{
        reducer.productSelected = newProduct;
        let productsToShowUpdated = reducer.productsToShow.map(el => el.nome===newProduct.nome ? el=newProduct : el=el);
        reducer.setProductsToShow(productsToShowUpdated)
} 
}



const ContextComponent = ({child})=>{
   
 return(
    <div>
    <UnitsStateContext.Provider value={reducer}>
        {child}
    </UnitsStateContext.Provider>
    </div>
    
 )
}

export default ContextComponent