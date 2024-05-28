const ADD_TO_CART='ADD_TO_CART';
const REMOVE_FROM_CART='REMOVE_FROM_CART';
const DECREASE_QUANTITY='DECREASE_QUANTITY';
const INCREASE_QUANTITY='INCREASE_QUANTITY';

const addCart=({title,image,description,price,id})=>{
    return {type:ADD_TO_CART,id:id,data:{title:title,image:image,description:description,price:price}};
}

const RemoveCart=(id)=>{
    return {type:REMOVE_FROM_CART,id:id};
}

const decreaseQuantity=(id)=>{
    return {type:DECREASE_QUANTITY,id:id};
}

const increaseQuantity=(id)=>{
    return {type:INCREASE_QUANTITY,id:id};

}

export {ADD_TO_CART,REMOVE_FROM_CART,addCart,DECREASE_QUANTITY,INCREASE_QUANTITY,decreaseQuantity,increaseQuantity,RemoveCart};