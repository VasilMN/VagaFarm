import Stayles from  "./mainsection.module.css"
import logo from "../../assets/images/Rectangle 104.svg"
import logo1 from '../../assets/images/Ellipse 1.svg'

export const MainSaction = ( ) => {
    return <div className={Stayles.main} >
         <div className={Stayles.content}>
            
                <div className={Stayles.leftContent}>
                    <h3>
                    ԱՌԱՋԻՆԸ ՀԱՅԱՍՏԱՆՈՒՄ 
                    </h3>
                    <p>
                    Բինտեր, թանզիֆե մանրէազերծված բժշկական ,<br/> անձեռոցիկներ 
                    մանրէազերծված և ոչ մանրէազերծված <br/> բժշկական վիրակապեր արտադրող;
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