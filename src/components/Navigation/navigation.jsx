import React from "react";
import { NavLink } from "react-router-dom"
import {getActivClassName} from "./utils.js"
import Stayles from "./navigation.module.css"
import { Dropdown } from "../Dropdown/index.jsx";

export const Navigation = () => {
    return <nav className={Stayles.nav}>
 <ul className={Stayles.links} >
      <li className={Stayles.link}>
          <NavLink className={getActivClassName} to="/">ԳԼԽԱՎՈՐ</NavLink>

        </li>
        <li className={Stayles.link} >

          <NavLink className={getActivClassName}  to="/about">ՄԵՐ ՄԱՍԻՆ</NavLink>
        </li>
        <li className={Stayles.link} >

           <NavLink className={getActivClassName}  to="/product">ԱՐՏԱԴՐԱՆՔ</NavLink>
        </li>
        <li className={Stayles.link} >

          <NavLink className={getActivClassName  }to="/services">ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</NavLink>

        </li>
        <li className={Stayles.link}>

          <NavLink className={getActivClassName} to="/coworkers">ԳՈՐԾԸՆԿԵՐՆԵՐ</NavLink>

        </li>
        <li className={Stayles.link}>

          <NavLink className={getActivClassName} to="/feedback">ՀԵՏԱԴԱՐՁ ԿԱՊ</NavLink>

        </li>

        <li className={Stayles.link}>
          <Dropdown/>
        </li>
       
      </ul>

    </nav>
}