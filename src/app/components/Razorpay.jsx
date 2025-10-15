// components/RazorpayButton.js
'use client'; // This component uses client-side hooks, so mark it as a Client Component

import React, { useEffect, useRef } from 'react';

const RazorpayButton = ({ paymentButtonId }) => {
    const ref = useRef(null);

    useEffect(() => {
        // Ensure this code only runs in the browser
        if (typeof window === 'undefined' || !ref.current) {
            return;
        }
        
        // Clear any existing scripts in case of re-renders
        ref.current.innerHTML = ''; 
        
        // Create a new script element
        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.setAttribute('data-payment_button_id', paymentButtonId);
        script.async = true;

        // Append the script to the div referenced by 'ref'
        ref.current.appendChild(script);

        // Optional: Cleanup function to remove the script when the component unmounts
        return () => {
            if (ref.current) {
                ref.current.innerHTML = '';
            }
        };

    }, [paymentButtonId]); // Re-run the effect if the paymentButtonId changes

    // The script will be appended inside this form
    return <form ref={ref}></form>;
};

export default RazorpayButton;