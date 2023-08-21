import { Route, Routes } from "react-router-dom"
import { Binter } from "../Binter"
import { Tanziffs } from "../Tanziffs"
import { Napiks } from "../Napkins"
import { Tops } from "../Tops"
import { ProductNav } from "../../Navigation/productnav"
import Styles from './product.module.css'
export const  Product = () => {
return <div className={Styles.Product}>
           
        
        <ProductNav/>
        <Routes>
         <Route  path="/Binter" element = {<Binter/>} />
         <Route  path="/tanziffs" element= {<Tanziffs/>}/>
         <Route  path="/napkins" element= {<Napiks/>} />
         <Route  path="/Tops" element= {<Tops/>}/>
        </Routes>
        
        <Napiks/>
       

    </div>
}