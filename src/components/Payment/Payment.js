import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const Payment = ({product}) => {
    const stripePromise = loadStripe('pk_test_51M8hmyBxfMe73ILHxnYqy2OjB7wDg0B6IpJ5WTD2m7gSbgZbp6vSCHf5jFp540bJJBtobQ5S1nd2SF3HeItprWae00Hibu5M7N');
   console.log(product)

    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
            
        </div>
    );
};

export default Payment;