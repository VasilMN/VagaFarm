import React from "react";
import { NavLink } from "react-router-dom"
import {getActivClassName} from "./utils.js"
import Stayles from "./navigation.module.css"


export const ProductNav = () => {
    return <nav className={Stayles.nav}>
 <ul className={Stayles.links} >
      <li className={Stayles.link}>
          <NavLink className={getActivClassName} to="/Binter">Բինտեր</NavLink>

        </li>
        <li className={Stayles.link} >

          <NavLink className={getActivClassName}  to="/tanziffs">թանզիֆՆԵՐ</NavLink>
        </li>
        <li className={Stayles.link} >

           <NavLink className={getActivClassName}  to="/napkins">անձեռոցիկներ</NavLink>
        </li>
        <li className={Stayles.link} >

          <NavLink className={getActivClassName  }to="/Tops">ԹՈՓԵՐ</NavLink>

        </li>
        

        
       
      </ul>

    </nav>
}