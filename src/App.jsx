
import { Layout } from './components/Layout'
import { Modal } from './components/Modal'
import React,{useState} from "react"

export function App() {
  const [openModal, setopenModal] = useState(false)

  const togglModal = () => {
   setopenModal(!openModal)
  }
  return (
  
      <>
       {openModal?<Modal togglModal = {togglModal}/>:<Layout togglModal ={togglModal}/>}
      </>
      
    
  )
}


