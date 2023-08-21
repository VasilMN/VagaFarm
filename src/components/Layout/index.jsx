import React, { useState } from "react";
import { Header } from "../Header/header";
import { Route, Routes } from 'react-router-dom';
import { About } from "../Pages/About/about";
import { Chief } from "../Pages/CHIEF/chief";
import { Product } from "../Pages/Product/product";
import { Services } from "../Pages/Services/services";
import { CoWorkers } from "../Pages/CoWorkers/coworkers";
import { Footer } from "../Footer";
import { Feedback } from "../Pages/Feedback/Feedback";











 
export const Layout = ({togglModal}) => {

   
   
    return <>
     <Header/>
     <Routes>
         <Route  path="/" element = {<Chief togglModal={togglModal}   />} />
         <Route  path="/about" element= {<About/>}/>
         <Route  path="/product/*" element= {<Product/>} />
         <Route  path="/services" element= {<Services/>}/>
         <Route  path="/coworkers" element= {<CoWorkers/>} />
         <Route path="/feedback" element = {<Feedback/>}  />
         
       
     </Routes>

     <Footer/>
        

    </>
}