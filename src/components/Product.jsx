import { useEffect, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Product = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div>
          <Navbar></Navbar>
  {/* search field  */}

<div className="my-14">
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
</div>

<div className="my-14">
<select className="select select-primary w-full max-w-60">
  <option disabled selected>All</option>
  <option>Game of Thrones</option>
  <option>Lost</option>
  <option>Breaking Bad</option>
  <option>Walking Dead</option>
</select>
<select className="select select-primary w-full max-w-60 ml-4">
  <option disabled selected>Sort by</option>
  <option>Game of Thrones</option>
  <option>Lost</option>
  <option>Breaking Bad</option>
  <option>Walking Dead</option>
</select>
<select className="select select-primary w-full max-w-60 ml-4">
  <option disabled selected>Category</option>
  <option>Game of Thrones</option>
  <option>Lost</option>
  <option>Breaking Bad</option>
  <option>Walking Dead</option>
</select>
<select className="select select-primary w-full max-w-60 ml-4">
  <option disabled selected>Price</option>
  <option>Game of Thrones</option>
  <option>Lost</option>
  <option>Breaking Bad</option>
  <option>Walking Dead</option>
</select>
<select className="select select-primary w-full max-w-60 ml-4">
  <option disabled selected>Latest</option>
  <option>Game of Thrones</option>
  <option>Lost</option>
  <option>Breaking Bad</option>
  <option>Walking Dead</option>
</select>
</div>

{/* card section  */}


        <div className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
            product.map(products => 
                <div key={products._id} className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={products.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-amber-800 font-bold">{products.name}</h2>
    <p>{products.description}</p>
    <div className="flex">
    <p className="text-amber-800"><span className="text-amber-800 font-bold">Price: </span>${products.price}</p>
    <p className="text-amber-800"><span className="text-amber-800 font-bold ml-24">Rating: </span>{products.ratings}</p>
    </div>
    <p className="text-amber-700 flex items-center gap-2"><BiSolidCategory />{products.category}</p>
    {/* <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
            )
           }
        </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Product;