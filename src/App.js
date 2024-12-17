import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import './App.css';
import { addTOCart , removeCart } from './Store/Slices/Cart';
import axios from 'axios';
function App() {
  const [products , setProducts] = useState([])
  const getData = async ()=>{
    const respose = await axios.get('https://fakestoreapi.com/products')
    setProducts(respose.data)
  }
  useEffect(()=>{
    getData()
  } , [])
  const cart = useSelector((state)=>(state.carts));
  console.log(cart);
  
  const dispatch = useDispatch();
  return (
    <>
      {
         products.map((pro)=>{
          const {id , title , discription} = pro
          return(
            <div key={id} style={{border:'2px solid ' , display :'flex',
             justifyContent :'space-between' , 
             padding :'10px' , margin :'10px'}}>
                 <p>{id}</p>
                <h1>{title}</h1>
                <p>{discription}</p>
                <div>
                 <button  style={{backgroundColor:'green'}} onClick={()=>dispatch(addTOCart(pro))}>Add to Cart</button>
                 <button style={{backgroundColor:'red'}} onClick={()=>dispatch(removeCart(id))}>Remove</button>
                </div>
            </div>
          )
         })
      }
    </>
  );
}

export default App;
