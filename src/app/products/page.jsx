import React from 'react';
import ProductCard from '../components/productCard';


/* 
SSG: server side generation --> force cache
SSR: server side rendering --> no cache
ISR: incremental static regeneration --> revalidate cache


*/
const getProducts = async () => {
    const res = await fetch('http://localhost:5000/products', { cache: 'no-store' });
    return res.json();
}


const ProductsPage = async () => {
    const products = await getProducts();
    return (
        <div>
            <h2>Products: {products.length}</h2>
            <div classN ame="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;