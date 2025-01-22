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
  const [billingInfo, setBillingInfo] = useState({ name: "", address: "" });
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const cartData = searchParams.get("cart");
    if (cartData) {
      try {
        const parsedCart = JSON.parse(decodeURIComponent(cartData));
        setCart(parsedCart);
      } catch (err) {
        console.error("Error parsing cart data:", err);
      }
    }
  }, [searchParams]);

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price, 0);

  const handlePlaceOrder = () => {
    if (!billingInfo.name || !billingInfo.address) {
      alert("Please complete your billing information.");
      return;
    }
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      router.push("/checkout");
    }, 60000); 
  };

  return (
    <div className="p-6 md:p-8 lg:p-10">
      {orderPlaced ? (
        <div className="text-center bg-green-100 p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-green-800">
            🎉 Congratulations on Your Order! 🎉
          </h1>
          <p className="text-lg mt-4 text-gray-700">
            Thank you for shopping with us! Your order has been successfully
            placed, and we will ship it to your address soon.
          </p>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center space-x-4 bg-gray-100 p-3 rounded-md shadow-sm"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-600">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-lg font-bold">
              Grand Total: ${calculateTotal().toFixed(2)}
            </div>
          </div>
          <button
            onClick={() => router.push("/")}
            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Checkout</h1>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={billingInfo.name}
              onChange={handleBillingChange}
              placeholder="Your Name"
              className="w-full border p-2 rounded-md mb-2"
            />
            <input
              type="text"
              name="address"
              value={billingInfo.address}
              onChange={handleBillingChange}
              placeholder="Your Address"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Cart Summary</h2>
            <ul className="space-y-3">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center space-x-4 bg-gray-100 p-3 rounded-md shadow-sm"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-600">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 font-bold text-lg">
              Total: ${calculateTotal().toFixed(2)}
            </div>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
