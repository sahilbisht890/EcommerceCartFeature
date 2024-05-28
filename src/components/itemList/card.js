import { useState } from 'react';
import style from './style/style.module.css';

export default function Card({ title, image, description ,price,addCart,removeCart,id,purpose,quantity,decreaseQuantityValue,IncreaseQuantity}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [buttonText,setButtonText]=useState('ADD TO CART')
 

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const add=()=>{
        addCart(title,image,description,price,id);
        setButtonText('ADDED');
        setTimeout(() => {
            setButtonText('ADD TO CART');
        }, 1000); 
    }

    const increase=()=>{
        IncreaseQuantity(id);
    }

   const  remove=()=>
    {
        console.log('title',title)
        removeCart(id);
    }

    const decrease=()=>{
        decreaseQuantityValue(id);        
    }

    return (
        <div className="d-flex flex-column gap-2 w-25 justify-content-end" key={id}>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className={style.imageContainer}>
                    <img src={image} alt={title} />
                    <div className="title">
                        <h5>{title}</h5>
                    </div> 
                </div>
            </div>
            <div className='d-flex justify-content-between text-danger pe-4'>
                <h4 className='m-0'>$ {price}</h4>
                { purpose=='remove'?<div className='d-flex align-items-center gap-3 justify-content-center'><h4 className='m-0'>Quantity : {quantity} </h4><i className="bi bi-dash-circle-fill"  onClick={decrease}></i> <i onClick={increase}   className="bi bi-plus-circle-fill"></i> </div>:<></> }

            </div>
            <div>
                <p className='fs-5 fw-bold text-secondary'>Description</p>
                <p className={`${style.description} ${isExpanded ? style.expanded : ''}`}>
                    {description}
                </p>
                <span className={style.readMore} onClick={toggleReadMore}>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </span>
            </div>
            <div className='text-center w-100'>
                <button className='btn rounded bg-warning text-dark border border-none w-75 fw-medium' onClick={purpose==='add'?add:remove}>{purpose=='add'?buttonText:'REMOVE FROM CART'}</button>
            </div>
        </div>
    );
}
