import CartItems from "../cartItems";
import Layout from "../layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Merge } from "../layout";

export default function Main()
{
    return <>

    <BrowserRouter>
    <Routes>
       <Route path='' element={<Layout/>} >
            <Route index element={<Merge/>} />
            <Route path='cart' element={<CartItems/>} />
       </Route>

    </Routes>
    </BrowserRouter>
  
    </>
}