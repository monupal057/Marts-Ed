// //import React from 'react'

 import { useEffect, useState } from 'react'
import Hero from '../components/Hero' 
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom'



 const Home = () => {
   const [products, setProducts] = useState([])
   //console.log(products)
   const data = useLoaderData()
   
   useEffect(() => {
    setProducts(data.data);
   },[data]);
 
   return (
    <div>
    <Hero/>
    <Products products={products}/>
    </div>
  )
}

 export default Home
