"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Order {
  id: string;
  cart: { id: string; title: string; price: number; imageUrl: string }[];
  billingInfo: { name: string; address: string; paymentMethod: string };
  status: string;
  totalPrice: number;
}

const AdminDashboard: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const router = useRouter();

  // Fetch orders from localStorage
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(storedOrders);
  }, []);

  const handleStatusChange = (orderId: string, newStatus: string) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders);

    // Update localStorage with the new order status
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-blue-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <button
            className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100"
            onClick={() => router.push("/")}
          >
            Back to Home
          </button>
        </div>
      </div>

      <div className="flex-grow p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Orders</h2>
        {orders.length > 0 ? (
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left text-lg font-semibold">Order ID</th>
                <th className="px-4 py-2 border-b text-left text-lg font-semibold">Customer Name</th>
                <th className="px-4 py-2 border-b text-left text-lg font-semibold">Total Price</th>
                <th className="px-4 py-2 border-b text-left text-lg font-semibold">Status</th>
                <th className="px-4 py-2 border-b text-left text-lg font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-4 py-2 border-b">{order.id}</td>
                  <td className="px-4 py-2 border-b">{order.billingInfo.name}</td>
                  <td className="px-4 py-2 border-b">${order.totalPrice.toFixed(2)}</td>
                  <td className="px-4 py-2 border-b">
                    <span
                      className={`inline-block px-2 py-1 rounded-full ${
                        order.status === "Placed"
                          ? "bg-yellow-500 text-white"
                          : order.status === "Shipped"
                          ? "bg-green-500 text-white"
                          : "bg-gray-500 text-white"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 border-b">
                    <button
                      onClick={() => handleStatusChange(order.id, "Placed")}
                      className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                      disabled={order.status === "Placed"}
                    >
                      Place
                    </button>
                    <button
                      onClick={() => handleStatusChange(order.id, "Shipped")}
                      className="mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                      disabled={order.status === "Shipped"}
                    >
                      Ship
                    </button>
                    <button
                      onClick={() => handleStatusChange(order.id, "Pending")}
                      className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                      disabled={order.status === "Pending"}
                    >
                      Pending
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">No orders available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;


