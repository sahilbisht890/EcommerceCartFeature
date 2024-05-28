import { useEffect, useState } from "react";
import Card from "./card";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../store/action/cart";
import { fetchData } from "../store/action/dataFetch";

export default function List() {
    console.log('rendering')
    const dispatch = useDispatch();

    const { data, loading } = useSelector(state => state.data);

    console.log(data);
    const addToCart = (title, image, description, price, id) => {
        dispatch(addCart({ title, image, description, price, id }))
    }

    useEffect(() => {
        dispatch(fetchData());
    }, [])


    if (loading) {
        return <>
            <div className="text-center">
                <div class="spinner-border text-success" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        </>
    }



    return <>
        <h1 className="text-center text-danger">All Products</h1>
        <div className="d-flex w-100 gap-3 flex-wrap aling-items-center justify-content-center gap-5 py-5">
            {
                data.map((Element, index) => {

                    return <Card key={Element.id} id={Element.id} title={Element.title} addCart={addToCart} image={Element.image} purpose='add' price={Element.price} description={Element.description} />

                })

            }
        </div>

    </>
}

