import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomizeSection from './CustomizeSection';
import CatalogueSection from './CatalogueSection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function ProductsPage() {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        gsap.timeline()
        .from('.title', {duration: 0.5, opacity: 0, y: -50, ease: 'power2.easeOut'})
        .from('.fadedown', {duration: 1.2, opacity: 0, y: -50, ease: 'power2.easeOut'}, '-=1')
        .from('.card-img', {duration: 1.2, height: 0, ease: 'power2.easeOut'}, '-=1')
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('/products');
                setProducts(data);
            } catch (er) {
                console.log(er);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <CustomizeSection/>
            <CatalogueSection products={products}/>
        </>
    );
}

export default ProductsPage;