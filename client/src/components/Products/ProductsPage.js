import React, { useEffect } from 'react';
import CustomizeSection from './CustomizeSection';
import CatalogueSection from './CatalogueSection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function ProductsPage() {

    useEffect(() => {
        gsap.timeline()
        .from('.title', {duration: 0.5, opacity: 0, y: -50, ease: 'power2.easeOut'})
        .from('.fadedown', {duration: 1.2, opacity: 0, y: -50, ease: 'power2.easeOut'}, '-=1')
        .from('.card-img', {duration: 1.2, height: 0, ease: 'power2.easeOut'}, '-=1')
    }, []);

    return (
        <>
            <CustomizeSection/>
            <CatalogueSection/>
        </>
    );
}

export default ProductsPage;