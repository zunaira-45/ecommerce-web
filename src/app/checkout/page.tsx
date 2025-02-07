"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Topbar from "../Components/Topbar";
import Navbar from "../Components/Navbar";

interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

interface Order {
  id: string;
  cart: CartItem[];
  billingInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    paymentMethod: string;
  };
  status: "Pending";
  totalPrice: number;
}

const CheckoutPage: React.FC = () => {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    paymentMethod: "Credit Card",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Fetch cart data from the query string
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const cartData = urlParams.get("cart");
    if (cartData) {
      try {
        const parsedCart = JSON.parse(decodeURIComponent(cartData));
        setCart(parsedCart);
      } catch (err) {
        console.error("Error parsing cart data:", err);
      }
    }
  }, []);

  const handleBillingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (!billingInfo.name || !billingInfo.address || !billingInfo.phone || !billingInfo.postalCode) {
      alert("Please complete all required billing information.");
      return;
    }

    const newOrder: Order = {
      id: `ORD-${new Date().getTime()}`,
      cart,
      billingInfo,
      status: "Pending",
      totalPrice: calculateTotal(),
    };

    // Retrieve existing orders from localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const updatedOrders = [...existingOrders, newOrder];

    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    setOrderPlaced(true);
    setCart([]);
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Topbar/>
      <Navbar/>
      
      <div className="flex-grow flex items-center justify-center">
        {orderPlaced ? (
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h1 className="text-2xl font-bold text-green-600">
              Order Placed Successfully!
            </h1>
            <p className="mt-2 text-gray-700">
              Thank you for your order. We will ship it soon.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => router.push("/")}
            >
              Back to Home
            </button>
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
                        <p className="text-gray-600">
                          ${item.price.toFixed(2)}
                        </p>
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
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  value={billingInfo.email}
                  onChange={handleBillingChange}
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="phone"
                  value={billingInfo.phone}
                  onChange={handleBillingChange}
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="address"
                  value={billingInfo.address}
                  onChange={handleBillingChange}
                  placeholder="Shipping Address"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="postalCode"
                  value={billingInfo.postalCode}
                  onChange={handleBillingChange}
                  placeholder="Postal Code"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <select
                  name="paymentMethod"
                  value={billingInfo.paymentMethod}
                  onChange={handleBillingChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
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



