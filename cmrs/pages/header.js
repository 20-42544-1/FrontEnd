import Layout from "./layout"
import Image from "next/image"

export default function Header(){
    return(
        <>     
        <h1>CMRS</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/manager-profile">Profile</a></li>
      <li><a href="/manager-signin">Sign in</a></li>
      <li><a href="/manager-signin">Sign up</a></li>
      <li><a href="/manager-contactAdmin">contactAdmin</a></li>
      <li><a href="/manager-editProfile">Edit Profile</a></li>
      <li><a href="/manager-addsafetypost">Add Safety Post</a></li>
    </ul>
  </nav>
        </>
    )
}


