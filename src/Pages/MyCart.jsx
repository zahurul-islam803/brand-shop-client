import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const loadedCart = useLoaderData();
  const [carts, setCarts] = useState(loadedCart);

    const handleDeleteCart = (id) => {
      fetch(`http://localhost:5000/carts/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your cart item has been deleted",
              showConfirmButton: false,
              timer: 1500,
            });
            const remaining = carts.filter((cart) => cart._id !== id);
            setCarts(remaining);
          }
        });
    };

  return (
    <div>
      <h1 className="text-6xl font-extrabold text-center mt-24 mb-10">
        My Carts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {carts?.map((cart) => (
          <div
            key={cart._id}
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="card card-compact bg-base-100 shadow-lg"
          >
            <figure>
              <img
                src={cart.image}
                className="h-[300px] w-[500px]"
                alt="brand image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Brand: {cart.brand}</h2>
              <p>Name: {cart.name}</p>
              <p>Price: ${cart.price}</p>
              <p>ID: {cart.productId}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleDeleteCart(cart._id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;