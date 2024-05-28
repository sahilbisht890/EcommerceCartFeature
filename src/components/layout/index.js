import { Outlet } from "react-router";
import Navbar from "../navbar";
import { Middle } from "../navbar";
import Footer from "../footer";
import List from "../itemList";

export default function Layout()
{
    return <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
}

 function Merge()
{
     return <>
     <Middle/>
     <List/>
     </>
    
}

export {Merge}