import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateProduct = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const updateProduct = {
      image,
      name,
      brand,
      type,
      price,
      rating,
    };
    // post update product
    fetch(`http://localhost:5000/products/${loadedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-20 rounded-lg">
      <h1 className="text-6xl font-extrabold text-center mb-5">
        Update Product
      </h1>
      <form onSubmit={handleUpdateProduct}>
        {/* form row 1 */}
        <div className="md:flex gap-6 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                required
                placeholder="Product Image"
                defaultValue={loadedData?.image}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                required
                placeholder="Product Name"
                defaultValue={loadedData?.name}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row 2 */}
        <div className="md:flex gap-6 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                required
                placeholder="Brand Name"
                defaultValue={loadedData?.brand}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-2">
            <label className="label">
              <span className="label-text">Product Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                required
                placeholder="Product Type"
                defaultValue={loadedData?.type}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row 3 */}
        <div className="md:flex gap-6 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                required
                placeholder="Product Price"
                defaultValue={loadedData?.price}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-2">
            <label className="label">
              <span className="label-text">Product Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="rating"
                required
                placeholder="Product Rating"
                defaultValue={loadedData?.rating}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Product"
          className="btn btn-block bg-[#f5d77e]"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;