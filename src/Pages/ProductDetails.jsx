import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const {id} = useParams();
  const [products, setProducts] = useState({})
  const loadedData = useLoaderData();
  
  useEffect(()=>{
    const findProduct = loadedData?.find(product => product._id == id);
    setProducts(findProduct);
  },[id, loadedData])
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="card lg:card-side bg-[#F4F3F0] shadow-lg mt-10"
    >
      <figure>
        <img src={products.image} className="w-[800px] h-[600px]" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Brand: {products.brand}</h2>
        <h2 className="text-2xl">Product: {products.name}</h2>
        <h5>Type: {products.type}</h5>
        <h5>Price: ${products.price}</h5>
        <h5>Rating: {products.rating}</h5>
        <p>Description: {products.desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-accent">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;