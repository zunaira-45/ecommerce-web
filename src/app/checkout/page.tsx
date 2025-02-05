"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
    address: string;
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
    address: "",
    paymentMethod: "Credit Card",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

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
    if (!billingInfo.name || !billingInfo.address) {
      alert("Please complete your billing information.");
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {orderPlaced ? (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold text-green-600">
            Order Placed Successfully!
          </h1>
          <p className="mt-2 text-gray-700">Thank you for your order.</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
            onClick={() => router.push("/")}
          >
            Home Page
          </button>
        </div>
      ) : (
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>

          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <Image src={item.imageUrl} alt={item.title} width={80} height={80} />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}

          <div className="mt-4">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <input
              type="text"
              name="name"
              value={billingInfo.name}
              onChange={handleBillingChange}
              placeholder="Full Name"
              className="w-full p-3 border rounded mt-2"
            />
            <input
              type="text"
              name="address"
              value={billingInfo.address}
              onChange={handleBillingChange}
              placeholder="Shipping Address"
              className="w-full p-3 border rounded mt-2"
            />
            <select
              name="paymentMethod"
              value={billingInfo.paymentMethod}
              onChange={handleBillingChange}
              className="w-full p-3 border rounded mt-2"
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </div>

          <button
            className="w-full py-3 bg-green-600 text-white mt-4 rounded"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
