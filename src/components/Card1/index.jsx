import Stayles from "./card1.module.css"
import CardImg from "../../assets/images/ogimage 1.svg"
export const  Card1 = () => {
    return <div className={Stayles.card}>
     <img className={Stayles.cardimg} src={CardImg} alt="alt" />
    </div>
}