import { useLoaderData } from "react-router-dom";

const Disney = () => {
 const loaderData = useLoaderData();
 const filterDisney = loaderData.filter(
   (data) => data.brand == "Disney"
 );
 return (
   <>
     <div>
       <div className="carousel w-full">
         <div id="slide1" className="carousel-item relative w-full">
           <img
             src="https://i.ibb.co/XDcDRwZ/d1st.jpg"
             className="w-full h-[800px] rounded-lg"
           />
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide3" className="btn btn-circle">
               ❮
             </a>
             <a href="#slide2" className="btn btn-circle">
               ❯
             </a>
           </div>
         </div>
         <div id="slide2" className="carousel-item relative w-full">
           <img
             src="https://i.ibb.co/ftJXwKb/d2nd.jpg"
             className="w-full h-[800px] rounded-lg"
           />
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide1" className="btn btn-circle">
               ❮
             </a>
             <a href="#slide3" className="btn btn-circle">
               ❯
             </a>
           </div>
         </div>
         <div id="slide3" className="carousel-item relative w-full">
           <img
             src="https://i.ibb.co/kqHz2BQ/d3rd.jpg"
             className="w-full h-[800px] rounded-lg"
           />
           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
             <a href="#slide2" className="btn btn-circle">
               ❮
             </a>
             <a href="#slide1" className="btn btn-circle">
               ❯
             </a>
           </div>
         </div>
       </div>
     </div>
     <div>
       <h1 className="text-center text-6xl font-extrabold mb-10 mt-24">
         Disney
       </h1>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {filterDisney.map((disney) => (
           <div
             key={disney._id}
             data-aos="zoom-in-up"
             data-aos-duration="1000"
             className="card bg-base-100 shadow-xl"
           >
             <figure>
               <img
                 src={disney.image}
                 alt="sony-picture"
                 className="w-[750px] h-[500px]"
               />
             </figure>
             <div className="card-body">
               <h2 className="card-title">Product Name: {disney.name}</h2>
               <h2 className="card-title">Product Brand: {disney.brand}</h2>
               <h2 className="card-title">Product Type: {disney.type}</h2>
               <h2 className="card-title">Product Price: ${disney.price}</h2>
               <h2 className="card-title">Product Rating: {disney.rating}</h2>
               <div className="card-actions justify-end">
                 <button className="btn btn-info">Details</button>
                 <button className="btn btn-success">Update</button>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   </>
 );
};
export default Disney;
