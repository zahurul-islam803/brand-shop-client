import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const loadedData = useLoaderData();

  const productId = products._id;
  const image = products.image;
  const brand = products.brand;
  const name = products.name;
  const price = products.price;

  const insertToCart = {
    productId,
    image,
    brand,
    name,
    price,
  };

  const handleToCart = () => {
    fetch("https://brand-shop-server-lilac.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(insertToCart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product add to cart successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  useEffect(() => {
    const findProduct = loadedData?.find((product) => product._id == id);
    setProducts(findProduct);
  }, [id, loadedData]);
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
          <button onClick={handleToCart} className="btn btn-accent">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
