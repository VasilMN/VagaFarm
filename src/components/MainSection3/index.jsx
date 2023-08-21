import { Card1 } from "../Card1"
import Stayles from "./mainsection3.module.css"

export const MainSection3 = () => {
    return <div className={Stayles.container}>
        <h2 className={Stayles.containerh2}>ԳՈՐԾԸՆԿԵՐՆԵՐ</h2>
        <div className={Stayles.content} >
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
        </div>
        <button className={Stayles.button}>ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ</button>
    </div>
}