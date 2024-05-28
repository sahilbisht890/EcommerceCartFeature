import Navbar from "../navbar";
import { Middle } from "../navbar";
import CartItems from "../cartItems";
import Layout from "../layout";
import List from "../itemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Main()
{
    return <>

    <BrowserRouter>
    <Routes>
       <Route path='' element={<Layout/>} >
            <Route index element={<List/>} />
            <Route path='cart' element={<CartItems/>} />

       </Route>

    </Routes>
    </BrowserRouter>
  
    </>
}