import React from "react"
import Stayles from "./Header.module.css"
import Logo from '../../assets/images/logo.svg'
import { Navigation } from "../Navigation/navigation"

export const Header = () => {
    return <header className={Stayles.header} >
        <div className={Stayles.container}>
        <img className={Stayles.logo} src={Logo} alt="alt" />

                <div className= {Stayles.content}>
                   
                  
                   
                  <Navigation/>
                    
                   
                   
                </div>
            </div>

    </header>
}