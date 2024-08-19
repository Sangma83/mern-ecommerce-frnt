import { useEffect, useState } from "react";


const Product = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
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
    <h2 className="card-title">{products.name}</h2>
    <p>{products.description}</p>
    <div className="flex">
    <p>{products.price}$</p>
    <p>{products.ratings}</p>
    </div>
    <p>{products.category}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            )
           }
        </div>
    );
};

export default Product;