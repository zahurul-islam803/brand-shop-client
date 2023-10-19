import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = e => {
      e.preventDefault();
      const form = e.target;
      const image = form.image.value;
      const name = form.name.value;
      const brand = form.brand.value;
      const type = form.type.value;     
      const price = form.price.value;
      const rating = form.rating.value;
      const desc = form.desc.value;
      const newProduct = {
        image,
        name,
        brand,
        type,
        price,
        rating,
        desc,
      };    
      // post product
      fetch("http://localhost:5000/products",{
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newProduct),
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
           Swal.fire({
             position: "top-end",
             icon: "success",
             title: "Product added successfully",
             showConfirmButton: false,
             timer: 1500,
           });
           form.reset();
        }
      }) 
    }


  return (
    <div className="bg-[#F4F3F0] p-20 rounded-lg">
      <h1 className="text-6xl font-extrabold text-center mb-5">Add Product</h1>
      <form onSubmit={handleAddProduct}>
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
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control w-full mb-6">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="desc"
              required
              placeholder="Description"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <input
          type="submit"
          value="Add Product"
          className="btn btn-block bg-[#f5d77e]"
        />
      </form>
    </div>
  );
};

export default AddProduct;