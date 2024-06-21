
// import { useEffect, useState } from 'react'
// import Hero from '../components/Hero' 
// import Products from '../components/Products'
// import { useLoaderData } from 'react-router-dom'



//  const Home = () => {
//    const [products, setProducts] = useState([])
//    //console.log(products)
//    const data = useLoaderData()
   
//    useEffect(() => {
//     setProducts(data.data);
//    },[data]);
 
//    return (
//     <div>
//     <Hero/>
//     <Products products={products}/>
//     </div>
//   )
// }

//  export default Home


import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <div className="min-h-screen">
      <Hero />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
        <Products products={products} />
      </div>
    </div>
  );
};

export default Home;
