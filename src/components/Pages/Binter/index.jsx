import { Card2 } from "../../Card2"
import Stayles from "./binter.module.css"
import  { string1, string2,Layer1,Layer2, SM1,pcs2} from "../../MainSection1/utils"

export const Binter = () => {
return <div className={Stayles.binter}>
        <Card2 p = {string2} sm={SM1} layer={Layer1} pcs={pcs2} />
        <Card2  p = {string1} sm={SM1} layer={Layer2} pcs={pcs2}/>
    </div>
}