import Navbar from "../navbar";
import { Middle } from "../navbar";
import CartItems from "../cartItems";
import Layout from "../layout";
import List from "../itemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Merge } from "../layout";

export default function Main()
{
    return <>

    <BrowserRouter  basename={process.env.PUBLIC_URL}>
    <Routes>
       <Route path='' element={<Layout/>} >
            <Route index element={<Merge/>} />
            <Route path='cart' element={<CartItems/>} />

       </Route>

    </Routes>
    </BrowserRouter>
  
    </>
}