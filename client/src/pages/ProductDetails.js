import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        if (params?.slug) getProduct()
    }, [params?.slug])
    const getProduct = async () => {
        try {
            const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`)
            setProduct(data?.product)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Layout>
            <div className='row container mt-2'>
                <div className='col-md-6'>
                    <img className="card-img-top"
                        src={`/api/v1/product/product-photo/${product._id}`}
                        alt={product.name} />
                </div>
                <div className='col-md-6 '>
                    <h1 className='text-center'>Product Details</h1>
                    <h5>Name: {product.name}</h5>
                    <h5>Description: {product.description}</h5>
                    <h5>Price: {product.price}</h5>
                </div>
            </div>
            <div className='row'>
                Similar Products
            </div>
        </Layout>
    )
}

export default ProductDetails