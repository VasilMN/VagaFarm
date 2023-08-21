import Logo from '../../assets/images/logo 1.svg'
import Logo1 from '../../assets/icons/ci_location.svg'
import Logo2 from '../../assets/icons/pepicons_letter.svg'
import Logo3 from '../../assets/icons/Vector.svg'
import Logo4 from '../../assets/icons/Vector (1).svg'
import Logo5 from '../../assets/icons/Vector (2).svg'
import Logo6 from '../../assets/icons/instagram (1).svg'






import Stayles from "./footer.module.css"
export const Footer = () => {

    return <>
    <footer className={Stayles.footer}>
        <div className={Stayles.container}>
       <div> <img className={Stayles.Logo} src={Logo} alt="alt" /></div>
       <div>
        <h4>ԱՐՏԱԴՐԱՆՔ</h4>
        <ul>
            <li>ՀԵՂՈՒԿՆԵՐ</li>
            <li> ՔՍՈՒՔՆԵՐ</li>
            <li>ՅՈՒՂԵՐ</li>
            <li> ՈԳԵԹՈՒՐՄԵՐ</li>
            <li> ՓՈՇԻՆԵՐ</li>
            <li>ՄԱՇԿԻ ԽՆԱՄՔԻ ՄԻՋՈՑՆԵՐ</li>

        </ul>
       </div>
       <div className={Stayles.address}>
       <h4>ԿԱՊ ՄԵԶ ՀԵՏ</h4>
       <p> <img src={Logo1} alt="alt" /> Զանգահարեք մեզ: +374 90 000 000</p>
       <p> <img src={Logo2} alt="alt" /> Էլ հասցե: @mail.ru</p>
       <p>  <img src={Logo3} alt="alt" /> Երևան</p>


       </div>
       <div className={Stayles.iconsdiv}>
        <h4 >ՓՆՏՐԵՔ ՄԵԶ։</h4>
        <div className={Stayles.center} >
        <img src={Logo4} alt="alt" />
        <img src={Logo5} alt="alt" />
        <img src={Logo6} alt="alt" />
        </div>

       </div>
    </div>
    <p className={Stayles.string}>By ArmCoding - © 2022 Բոլոր իրավունքները պաշտպանված են</p>
    </footer>
   
    
    </> 
}