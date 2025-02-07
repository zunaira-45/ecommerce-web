"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaMoon, FaSun, FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import Topbar from "../Components/Topbar";

interface Order {
  id: string;
  cart: { id: string; title: string; price: number; imageUrl: string }[];
  billingInfo: {
    name: string;
    address: string;
    postalCode: string;
    paymentMethod: string;
  };
  status: string;
  totalPrice: number;
}

const AdminDashboard: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(storedOrders);
  }, []);

  const handleStatusChange = (orderId: string, newStatus: string) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    toast.success(`Order ${orderId} status updated to ${newStatus}`);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const filteredOrders = orders.filter((order) => {
    return (
      (selectedStatus === "All" || order.status === selectedStatus) &&
      order.billingInfo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      } flex flex-col`}
    >
      <Topbar/>
      <div
        className={`p-4 shadow-md flex justify-between items-center ${
          darkMode ? "bg-gray-800" : "bg-blue-900 text-white"
        }`}
      >
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center space-x-3">
          <button
            className="px-3 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-200"
            onClick={() => router.push("/")}
          >
            Back to Home
          </button>
          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
          </button>
        </div>
      </div>

    
      <div className="flex justify-between p-4 bg-white shadow-md">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search by name..."
            className="p-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-blue-950 text-white p-2 rounded-md hover:bg-blue-600">
            <FaSearch />
          </button>
        </div>
        <select
          className="p-2 border rounded-md"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="All">All Orders</option>
          <option value="Pending">Pending</option>
          <option value="Placed">Placed</option>
          <option value="Shipped">Shipped</option>
        </select>
      </div>

    
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6">Orders</h2>
        {orders.length > 0 ? (
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border-b text-left font-semibold">Order ID</th>
                <th className="px-4 py-2 border-b text-left font-semibold">Customer Name</th>
                <th className="px-4 py-2 border-b text-left font-semibold">Total Price</th>
                <th className="px-4 py-2 border-b text-left font-semibold">Status</th>
                <th className="px-4 py-2 border-b text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-100">
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
                  <td className="px-4 py-2 border-b flex space-x-2">
                    <button
                      onClick={() => handleStatusChange(order.id, "Placed")}
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      Place
                    </button>
                    <button
                      onClick={() => handleStatusChange(order.id, "Shipped")}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Ship
                    </button>
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      <FaEye />
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

      
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Order Details</h2>
            <p><strong>Order ID:</strong> {selectedOrder.id}</p>
            <p><strong>Customer:</strong> {selectedOrder.billingInfo.name}</p>
            <p><strong>Total Price:</strong> ${selectedOrder.totalPrice.toFixed(2)}</p>
            <p><strong>Address:</strong> {selectedOrder.billingInfo.address}</p>
            <button onClick={() => setSelectedOrder(null)} className="mt-4 bg-red-500 text-white p-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

