'use client';

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"

export const PayPalButton = () => {


    const [{ isPending }] = usePayPalScriptReducer();

    if ( isPending ) {
        return (
            <div className="animate-pulse mb-16">
                <div className="h-11 bg-gray-300 rounded" />
                <div className="h-11 mt-2 bg-gray-300 rounded" />
            </div>
        )
    }


  return (
    
    <PayPalButtons />
  )
}
