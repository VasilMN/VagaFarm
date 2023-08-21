import { Card2 } from "../../Card2"
import Stayles from "./napiks.module.css"
import  { string1, string2, string3, Layer1,Layer2, SM1,SM2,pcs1,pcs2} from "../../MainSection1/utils"

export const Napiks = () => {
    return <div className={Stayles.napiks}>
     <Card2 p = {string2} sm={SM1} layer={Layer1} pcs={pcs2}/>
     <Card2 p = {string1} sm={SM1} layer={Layer2} pcs={pcs2}/>
     <Card2 p = {string3} sm={SM2} layer={Layer1} pcs={pcs1}/>
     <Card2 p = {string3} sm={SM2} layer={Layer2} pcs={pcs1}/>
     <Card2 p = {string2} sm={SM2} layer={Layer1} pcs={pcs2}/>
     <Card2 p = {string2} sm={SM2} layer={Layer2} pcs={pcs2}/>
     <Card2 p = {string2} sm={SM1} layer={Layer1} pcs={pcs2}/>
     <Card2 p = {string1} sm={SM1} layer={Layer2} pcs={pcs2}/>
     <Card2 p = {string3} sm={SM2} layer={Layer1} pcs={pcs1}/>
     <Card2 p = {string3} sm={SM2} layer={Layer2} pcs={pcs1}/>
     <Card2 p = {string2} sm={SM2} layer={Layer1} pcs={pcs2}/>
     <Card2 p = {string2} sm={SM2} layer={Layer1} pcs={pcs2}/>
     <Card2 p = {string2} sm={SM2} layer={Layer2} pcs={pcs2}/>
     <Card2 p = {string2} sm={SM1} layer={Layer1} pcs={pcs2}/>
     <Card2 p = {string1} sm={SM1} layer={Layer2} pcs={pcs2}/>
     <Card2 p = {string3} sm={SM2} layer={Layer1} pcs={pcs1}/>
     

    </div>
}