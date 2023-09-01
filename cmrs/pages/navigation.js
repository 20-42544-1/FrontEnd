import Link from "next/link";
import LOGIN from "./Manager/manager-signin";
import REG from "./Manager/manager-signup";
import CONTACT from "./Manager/manager-contactAdmin";
import EDIT from "./Manager/manager-editProfile";
import SafetyPost from "./Manager/manager-addsafetypost";

import Home from ".";

export default function navigation(){
    return(
        <>
        <nav>
      <Link href="/">Home</Link>&nbsp;
      <Link href="/Manager/manager-signup">Registration </Link>&nbsp;
      <Link href="/Manager/manager-signin">Signin </Link>&nbsp;
      <Link href="/Manager/manager-contactAdmin">contactAdmin </Link>&nbsp;
      <Link href="/Manager/manager-editProfile">Edit Profile </Link>&nbsp;
      <Link href="/Manager/manager-addsafetypost">Safety Post </Link>&nbsp;
    
      </nav>
      </>
    )
}