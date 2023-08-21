import React, {useState} from "react"
import  armenianFlag from "../../assets/images/AM-Armenia-Flag-icon.png"
import  usaFlag from "../../assets/images/us-flagss-america-flag-collection-free-vector.jpg"
import Stayles from "./dropdown.module.css"
export const Dropdown = () => {
    const [open, setOpen] = useState(false)
    const [language,setLanguage] = useState('armenian')
    const handleOpen = () => {
        setOpen(!open)
    }
  
    const changeLanguage = () => {
        setLanguage('english')
    }

    return <div className={Stayles.flag} onClick={handleOpen}>
    {
        open ?
            <div className={Stayles.menus}>
                        <img src={armenianFlag} alt="armeniaFlag" />
                <div className={Stayles.nav}>
                    <div onClick={changeLanguage}>
                        <img src={usaFlag} alt="armeniaFlag" />
                    </div>
                </div>
            </div>
            : <div className={Stayles.check}>
                <img src={armenianFlag} alt="armeniaFlag" />
            </div>
    }
</div>
}