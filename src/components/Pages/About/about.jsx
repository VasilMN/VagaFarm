import Stayles from "./about.module.css"
import img1 from "../../../assets/images/Rectangle 104 (1).svg"
import img2 from "../../../assets/images/Rectangle 105.svg"
import img3 from "../../../assets/images/Ellipse 1.svg"
import img4 from "../../../assets/images/Ellipse 2.svg"


export const  About = () => {
    return <div className={Stayles.about}>
        
    <div className={Stayles.container}  >
    <h1 className={Stayles.h1}>ՄԵՐ ՄԱՍԻՆ</h1>
    <div>
        <div className={Stayles.div1}>

            <div className={Stayles.divrelativ} >
                <img className={Stayles.logo} src={img4} alt="alt" />
                <img src={img1} alt="alt" />
                </div>
            <div className={Stayles.string1}>
                <p>
                Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
        <div className={Stayles.div2}>
            <div className={Stayles.string2}>
                <img  className={Stayles.logo1} src={img3} alt="alt" />
                <p>
                Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div><img src={img2} alt="alt" /></div>
        </div>
        </div>
    </div>
</div>
}