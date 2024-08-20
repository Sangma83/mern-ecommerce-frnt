import { useEffect, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit] = useState(9); // Set limit to 9 products per page
    const [search, setSearch] = useState(""); 
    const [category, setCategory] = useState(""); 
    const [priceRange, setPriceRange] = useState(""); 
    const [sort, setSort] = useState('priceAsc'); 

    useEffect(() => {
        fetchProducts(currentPage, search, category, priceRange, sort);
    }, [currentPage, search, category, priceRange, sort]);

    const fetchProducts = async (page, searchQuery, categoryQuery, priceRangeQuery, sortQuery) => {
        try {
            const response = await fetch(`https://product-list-delta-beryl.vercel.app/products?page=${page}&limit=${limit}&search=${searchQuery}&category=${categoryQuery}&priceRange=${priceRangeQuery}&sort=${sortQuery}`);
            const data = await response.json();
            setProducts(data.products);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
        setCurrentPage(1); // Reset to first page on new search
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        setCurrentPage(1); // Reset to first page on category change
    };

    const handlePriceRangeChange = (event) => {
        setPriceRange(event.target.value);
        setCurrentPage(1); // Reset to first page on price range change
    };

    const handleSortChange = (event) => {
        setSort(event.target.value);
        setCurrentPage(1); // Reset to first page on sorting change
    };

    return (
        <div>
            <Navbar />

            {/* Search Field */}
            <div className="my-8 mx-4">
                <label className="input input-bordered flex items-center gap-2 w-full md:w-1/2 lg:w-1/3 mx-auto">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search"
                        value={search}
                        onChange={handleSearchChange} // Update search state on input change
                    />
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

            {/* Filters Section */}
            <div className="my-8 mx-4 flex flex-col lg:flex-row justify-center items-center gap-4">
                <select
                    className="select select-primary w-full max-w-xs"
                    value={category}
                    onChange={handleCategoryChange} // Update category state on select change
                >
                    <option value="">All Categories</option>
                    <option>Electronics</option>
                    <option>Kitchen Appliances</option>
                    <option>Fitness</option>
                    <option>Wearable Technology</option>
                    <option>Accessories</option>
                    <option>Footwear</option>
                    <option>Home Decor</option>
                    <option>Cameras</option>
                    <option>Audio</option>
                    <option>Furniture</option>
                    <option>Home Automation</option>
                    <option>Personal Care</option>
                    <option>Tools</option>
                    <option>Gaming</option>
                    <option>Transportation</option>
                </select>
                <select
                    className="select select-primary w-full max-w-xs"
                    value={priceRange}
                    onChange={handlePriceRangeChange} // Update price range state on select change
                >
                    <option value="">Price Range</option>
                    <option value="50-100">50-100</option>
                    <option value="110-200">110-200</option>
                    <option value="210-300">210-300</option>
                    <option value="310-400">310-400</option>
                </select>
                <select
                    className="select select-primary w-full max-w-xs"
                    value={sort}
                    onChange={handleSortChange}
                >
                    <option value="">Price</option>
                    <option value="priceAsc">Low to High</option>
                    <option value="priceDesc">High to Low</option>
                </select>
                <select
                    className="select select-primary w-full max-w-xs"
                    value={sort}
                    onChange={handleSortChange}
                >
                    <option value="">Date</option>
                    <option value="dateAdded">Newest First</option>
                </select>
            </div>

            {/* Product Cards Section */}
            <div className="my-20 mx-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => 
                        <div key={product._id} className="card bg-base-100 shadow-xl w-full">
                            <figure className="px-10 pt-10">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="rounded-xl w-full h-auto object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-amber-800 font-bold">{product.name}</h2>
                                <p>{product.description}</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-amber-800"><span className="text-amber-800 font-bold">Price: </span>${product.price}</p>
                                    <p className="text-amber-800"><span className="text-amber-800 font-bold">Rating: </span>{product.ratings}</p>
                                </div>
                                <p className="text-amber-700 flex items-center gap-2"><BiSolidCategory />{product.category}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center my-8">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="btn btn-primary mr-4">
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="btn btn-primary ml-4">
                    Next
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default Product;
