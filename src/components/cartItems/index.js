import Card from "../itemList/card";
import { useDispatch, useSelector } from "react-redux";
import { RemoveCart ,decreaseQuantity,increaseQuantity} from "../store/action/cart";
import { Link } from "react-router-dom";

export default function CartItems() {
    const data = useSelector(state => state.cart);
    const dispatch=useDispatch();
     // Ensure 'stte.cart' matches your reducer name
     console.log('added',data);

     const removeFromCart=(id)=>{
         console.log('inside removeFromCart')
         dispatch(RemoveCart(id));
     }

    const  decreaseQuantityValue=(id)=>{
     dispatch(decreaseQuantity(id));
    }

    const  IncreaseQuantity=(id)=>{
        console.log('insideeee')
     dispatch(increaseQuantity(id));
    }
    return (
        <>
        <div><h1 className="text-center text-danger mt-4">Cart Items</h1></div>
        <div className="d-flex align-items-center py-4 justify-content-center  gap-5 flex-wrap">
        {data && data.length > 0 ? (
                data.map((element, index) => (
                        <Card 
                            key={element.id}
                            purpose='remove'
                            id={element.id}
                            title={element.data.title}
                            description={element.data.description}
                            image={element.data.image}
                            price={element.data.price}
                            removeCart={removeFromCart}
                            quantity={element.quantity}
                            decreaseQuantityValue={decreaseQuantityValue}
                            IncreaseQuantity={IncreaseQuantity}
                        />
                ))
            ) : (
                <>
                <div>
                <h2>No items in the cart.</h2>
                 <div className="text-center p-3">
                 <button className="border border-none  fs-2 bg-warning fw-bolder py-2 px-3"><Link to='/' style={{color:'black',textDecoration:'none'}}>Shop Products</Link></button>
                 </div>
                </div>
              
                </>
      
            )}
        </div>

        </>
    );
}
