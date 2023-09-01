import React from "react"
import Header from "./header"
import Footer from "./footer"
import Navigator from "./navigation"
export default function Layout({children},props){

  return (
    <>

    
    <Navigator></Navigator>
    {children}
  
    </>
  )
}