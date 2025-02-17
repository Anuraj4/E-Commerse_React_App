import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import SpinWheel from "./SpinWheel";

const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [discountedPrice, setDiscountedPrice] = useState(null);

    useEffect(() => {
        if (params?.slug) getProduct();
    }, [params?.slug]);

    // Get product
    const getProduct = async () => {
        try {
            const { data } = await axios.get(
                `https://backend-adkt.onrender.com/api/v1/product/get-product/${params.slug}`
            );
            setProduct(data?.product);
            setDiscountedPrice(data?.product.price); // Set initial price
            getSimilarProduct(data?.product._id, data?.product.category._id);
        } catch (error) {
            console.log(error);
        }
    };

    const getSimilarProduct = async (pid, cid) => {
        try {
            const { data } = await axios.get(
                `https://backend-adkt.onrender.com/api/v1/product/related-product/${pid}/${cid}`
            );
            setRelatedProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    };

    // Apply discount to the product price
    const handleDiscountApply = (discount) => {
        const originalPrice = product.price;
        const newPrice = originalPrice - (originalPrice * discount) / 100;
        setDiscountedPrice(newPrice.toFixed(2)); // Update price with discount applied
    };

    return (
        <Layout>
            <div className="row container mt-2">
                <div className="col-md-6">
                    <img
                        className="card-img-top"
                        src={`https://backend-adkt.onrender.com/api/v1/product/product-photo/${product._id}`}
                        alt={product.name}
                        height="300"
                        width="300px"
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="text-center">Product Details</h1>
                    <h6>Name: {product.name}</h6>
                    <h6>Description: {product.description}</h6>
                    <h6>
                        Price: $
                        {discountedPrice !== null
                            ? discountedPrice
                            : product.price}
                    </h6>
                    <h6>Category: {product.category?.name}</h6>
                    <button className="btn btn-secondary ms-1">Add To Cart</button>
                </div>
                <div className="spin-wheel-section">
                    <SpinWheel onDiscountApply={handleDiscountApply} />
                </div>
            </div>
            <hr />
            <div className="row container">
                <h6>Similar Products</h6>
                {relatedProducts.length < 1 && (
                    <p className="text-center">No similar product found</p>
                )}
                <div className="d-flex flex-wrap">
                    {relatedProducts?.map((p) => (
                        <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                            <img
                                className="card-img-top"
                                src={`https://backend-adkt.onrender.com/api/v1/product/product-photo/${p._id}`}
                                alt={p.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <p className="card-text">{p.description.substring(0, 30)}...</p>
                                <p className="card-text">$ {p.price}</p>
                                <button className="btn btn-secondary ms-1">Add To Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetails;
