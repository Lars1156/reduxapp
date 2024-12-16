import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import './App.css';
import { addTOCart } from './Store/Slices/Cart';
import Nav from './components/Nav';
import axios from 'axios';
function App() {
const[product , setProducts] = useState([])
  const getData  = async()=>{
    const response = axios.get('https://fakestoreapi.com/products')
    setProducts(response.data);
    console.log(response.data);
    
    
  }
  useEffect(()=>{
    getData();
  }, []);
  const cart = useSelector((state)=> console.log(state.carts));
  const dispatch = useDispatch();
  return (
   
    <>
    <Nav/>
    <div>
  {Array.isArray(product) && product.length > 0 ? (
    product.map((product) => {
      const { title, id, price, description } = product;
      return (
        <div key={id} style={{ border: '2px solid black', padding: '0.05rem' }}>
          <h1>{title}</h1>
          <p>{id}</p>
          <p>{price}</p>
          <p>{description}</p>
          <button onClick={() => dispatch(addTOCart)}>Add cart</button>
        </div>
      );
    })
  ) : (
    <p>No products available.</p>
  )}
</div>
    </>
  );
}

export default App;
