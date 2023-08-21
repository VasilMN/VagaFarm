import Stayles from "./modal.module.css"
import icon from "../../assets/images/Vector (3).svg"
import icon1 from "../../assets/images/Ellipse 12.svg"
import icon2 from "../../assets/images/Vector (4).svg"



export const Modal = ({togglModal}) => {
    return <div  className={Stayles.Modal} >
        <div className={Stayles.click} onClick={togglModal}>
           <img src={icon} alt="alt" />
        </div>
        <div className={Stayles.container}>
           <p className={Stayles.string1}>ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ</p>
            <p className={Stayles.string2}>ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿՊԱՏԱՍԽԱՆԻ ՁԵԶ ԷԼ․ՓՈՍՏԻ ՄԻՋՈՑՈՎ</p>
            <div  className={Stayles.div1}> 
                <div className={Stayles.img1}>
                <img src={icon1} alt="alt" />
                </div>
                <div className={Stayles.img2}>
                   <img src={icon2} alt="alt" />
                </div>
            </div>

        </div>
       

    </div>
}