

import { MainSaction } from "../../MainSection/MainSection"
import { MainSaction2 } from "../../MainSection2/MainSection2"
import { MainSection3 } from "../../MainSection3"
import { MainSection4 } from "../../MainSection4"
import { MainSection1} from "../../MainSection1"
import Stayles from "./chief.module.css"
export const  Chief = ({togglModal} ) => {

 
    return <div >
          
             <MainSaction/>
             <MainSection1/>
             <MainSaction2/>
             <MainSection3/>
             <MainSection4 togglModal = {togglModal} />
      
             
          
             
             

    </div>
}