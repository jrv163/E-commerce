'use client';

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { CreateOrderData, CreateOrderActions } from "@paypal/paypal-js";

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

    const createOrder = async(data: CreateOrderData, actions: CreateOrderActions): Promise<string> => {

      const transactionId = await actions.order.create({
        purchase_units: [
          {
            // invoice_id: 'order_id'
            amount: {
               value: '100.00' ,
             

            }
          }
        ]
      });

      console.log({transactionId})



      return '';
    }

        
     




  return (
    <PayPalButtons 
      createOrder={ createOrder }
      onApprove={}
    />
  )
}
