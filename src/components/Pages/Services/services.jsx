import img3 from "../../../assets/images/Ellipse 1.svg"
import img4 from "../../../assets/images/Ellipse 2.svg"
import logo from "../../../assets/images/Rectangle 102.svg"
import logo1 from "../../../assets/images/Rectangle 103.svg"


import Stayles from "./Services.module.css"
export const Services = () => {
    
    return <div className={Stayles.services}>

        <div className={Stayles.container}  >

            <div>
                <div className={Stayles.div1}>


                <div className={Stayles.string1}>
                    <h3 className={Stayles.h3} >ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</h3>
                        <p>
                            Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ; Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply 
                            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                            it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
                            the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply 
                            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                         <button className={Stayles.button} >ՊԱՏՎԻՐԵԼ ԶԱՆԳ</button>
                    </div>

                    <div className={Stayles.divrelativ} >
                        <img className={Stayles.logo} src={img3 } alt="alt" />
                        <img src={ logo1} alt="alt" />
                    </div>
                    
                </div>
                <div className={Stayles.div2}>
                   
                    <div><img src={logo } alt="alt" /></div>

                    <div className={Stayles.string2}>
                        <img className={Stayles.logo1} src={img4} alt="alt" />
                    <h3 className={Stayles.h3} >ԱՆՀԱՏԱԿԱՆ ՊԱՏՎԵՐ </h3>
                        <p>
                        Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ; Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply 
                            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                            it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
                            the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply 
                            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        
                        </p>
                        <button className={Stayles.button} >ՊԱՏՎԻՐԵԼ ԶԱՆԳ</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
}