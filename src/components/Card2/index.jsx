import img from "../../assets/images/d49b220e1de77d47187d831a3d30b71ec76598d56f3f48031284a1585176ff71.svg"
import Stayles from './card2.module.css'
export const Card2 = ({ p, sm, layer, pcs }) => {
    return <div className={Stayles.card2}>
        <div >
            <img src={img} alt="img" />
        </div>
        <p className={Stayles.p}> {p} </p>
        <div className={Stayles.layer}>
            <p className={Stayles.sm}>{sm}</p>
            <p>{layer}</p>
            <p>{pcs}</p>
        </div>
        <button className={Stayles.button} >ՏԵՍՆԵԼ ԱՎԵԼԻՆ</button>
    </div>
}