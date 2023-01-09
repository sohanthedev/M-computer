// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { useState } from 'react';


// const CheckoutForm = () => {
//     // console.log(product)
//     const [Warn, setWarn] = useState('')


//     const stripe = useStripe();
//     const elements = useElements();

//     const handleSubmit = async (event) => {
//         // Block native form submission.
//         event.preventDefault();

//         if (!stripe || !elements) {
//             // Stripe.js has not loaded yet. Make sure to disable
//             // form submission until Stripe.js has loaded.
//             return;
//         }

//         // Get a reference to a mounted CardElement. Elements knows how
//         // to find your CardElement because there can only ever be one of
//         // each type of element.
//         const card = elements.getElement(CardElement);

//         if (card == null) {
//             return;
//         }

//         // Use your card Element with other Stripe.js APIs
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card,
//         });

//         if (error) {
//             console.log('[error]', error);
//             setWarn(error.message)
//         } else {
//             console.log('[PaymentMethod]', paymentMethod);
//         }
//     };



//     return (
//         <div className='flex justify-center flex-col items-center my-auto py-14 lg:py-52'>
//             <form className='lg:w-[600px] w-[420px] h-42 border p-10 rounded-md bg-gray-600' onSubmit={handleSubmit}>
//                 <div className='flex -mt-6 pb-5 '>
//                     <h4 className='text-gray-100 text-lg font-bold mr-2'>We Accepts: </h4>
//                     <img className='w-48' src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" alt="" />

//                 </div>
//             <CardElement
//                 options={{
//                     style: {
//                         base: {
//                             fontSize: '19px',
//                             color: '#fff ',
//                             '::placeholder': {
//                                 color: '#fff',
//                             },
//                         },
//                         invalid: {
//                             color: '#9e2146',
//                         },
//                     },
//                 }}
//             />
//                 <button type="submit" className=' btn mt-5 btn-sm w-20 btn-primary' disabled={!stripe}>
//                 Pay
//             </button>
//             <p  className='font-semibold mt-3 text-[16px] text-warning'>{Warn}</p>
//             </form>
//         </div>
//     );
// };


// export default CheckoutForm;