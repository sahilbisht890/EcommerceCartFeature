import { Outlet } from "react-router";
import Navbar from "../navbar";
import { Middle } from "../navbar";
import Footer from "../footer";

export default function Layout()
{
    return <>
    <Navbar/>
    <Middle/>
    <Outlet/>
    <Footer/>
    </>
}