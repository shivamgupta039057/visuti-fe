import PaymentPage from '@/components/payment/PaymentPage'
import React from 'react'

export const metadata = {
  title: "Payment - Visuti Career | Secure Payment Gateway",
  description: "Complete your payment securely for NEET counseling services. Multiple payment options available.",
  keywords: [
    "Payment",
    "NEET counseling payment",
    "Secure payment"
  ],
};

const page = () => {
  return (    
    <>
    <PaymentPage />
    </>
  )
}

export default page

