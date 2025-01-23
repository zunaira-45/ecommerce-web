"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

const CheckoutPage: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    address: "",
    paymentMethod: "Credit Card",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    if (searchParams) {
      const cartData = searchParams.get("cart");
      if (cartData) {
        try {
          const parsedCart = JSON.parse(decodeURIComponent(cartData));
          setCart(parsedCart);
        } catch (err) {
          console.error("Error parsing cart data:", err);
        }
      }
    }
  }, [searchParams]);

  const handleBillingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (!billingInfo.name || !billingInfo.address) {
      alert("Please complete your billing information.");
      return;
    }

    // Simulate order placement
    setOrderPlaced(true);
    setCart([]);
    setTimeout(() => {
      setOrderPlaced(false);
      router.push("/");
    }, 5000); // Redirect after 5 seconds
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">E-Commerce</h1>
          <button
            className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100"
            onClick={() => router.push("/")}
          >
            Back to Home
          </button>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center">
        {orderPlaced ? (
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h1 className="text-2xl font-bold text-green-600">
              Order Placed Successfully!
            </h1>
            <p className="mt-2 text-gray-700">
              Thank you for your order. Redirecting to home...
            </p>
          </div>
        ) : (
          <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Order Summary
              </h2>
              {cart.length > 0 ? (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center bg-gray-50 p-4 rounded-md shadow-sm"
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                      <div className="ml-4 flex-1">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">Your cart is empty.</p>
              )}
              {cart.length > 0 && (
                <div className="mt-4 text-right font-bold text-lg">
                  Total: ${calculateTotal().toFixed(2)}
                </div>
              )}
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Billing Information
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={billingInfo.name}
                  onChange={handleBillingChange}
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="address"
                  value={billingInfo.address}
                  onChange={handleBillingChange}
                  placeholder="Shipping Address"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  name="paymentMethod"
                  value={billingInfo.paymentMethod}
                  onChange={handleBillingChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Credit Card">Credit Card</option>
                  <option value="PayPal">PayPal</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                </select>
              </div>
            </div>

            <button
              className="w-full py-3 bg-green-600 text-white text-lg font-semibold rounded-md hover:bg-green-700"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;



