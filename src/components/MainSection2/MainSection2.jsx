import Stayles from  "./mainsection2.module.css"
import logo from "../../assets/images/Rectangle 102.svg"
import logo1 from '../../assets/images/Ellipse 1.svg'

export const MainSaction2 = ( ) => {
    return <div className={Stayles.main} >
         <div className={Stayles.content}>
            
                <div className={Stayles.leftContent}>
                    <h3>
                    ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ <br /> ՍՏԵՐԻԼԻԶԱՑՈՒՄ
                    </h3>
                    <p>
                    Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒ;
                    </p>
                    <button className={Stayles.button}>ԿԱՐԴԱԼ ԱՎԵԼԻՆ</button>
                </div>
                <img src={logo1} className={Stayles.logo1} alt="alt" />
              <div className={Stayles.right}>
            
                <img className={Stayles.logo} src={logo} alt="alt" /> 
                 
              </div>
         </div>
    </div>
}