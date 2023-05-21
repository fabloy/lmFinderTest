import Header from './components/Header'
import Home from './page/Home'
import UnitPage from './page/UnitPage'
import Subdepartment from './page/Subdepartment'
import ContextComponent from './context-component/ContextComponent'
import ProductDetail from './page/ProductDetail'
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter, Routes} from 'react-router-dom';
import ManageStock from "../src/page/ManageStock"

function App() {
 
  return (
    <div className="pt-20 w-full h-screen mx-auto flex flex-col ">
      <Header></Header>
     
      
       <ContextComponent child={ 
        <Routes>
          <Route path="/" element={<Home></Home>} /> 
          <Route path="/unit/:unitname" element = {<UnitPage></UnitPage>}/>
          <Route path="/unit/:unitname/:subdepartment" element = {<Subdepartment></Subdepartment>}/>
          <Route path="/searchall" element = {<Subdepartment></Subdepartment>}/>
          <Route path="/productdetail/:productname" element = {<ProductDetail></ProductDetail>}/>
          <Route path='/managestock/:productname' element={<ManageStock></ManageStock>}></Route>
        </Routes>
       }>
       </ContextComponent>
     

     
    </div>
  );
}

export default App;
