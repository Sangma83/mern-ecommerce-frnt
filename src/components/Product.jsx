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