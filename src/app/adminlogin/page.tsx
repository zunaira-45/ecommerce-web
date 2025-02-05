"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Ensure that the login page is always shown
  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem("isAdmin");
    if (isAdminLoggedIn === "true") {
      // If the user is already logged in, redirect them to the dashboard after login
      router.push("/dashboard");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Check for correct credentials (example: admin credentials)
    if (username === "12345" && password === "12345") {
      setIsLoading(true);
      localStorage.setItem("isAdmin", "true"); // Store login state in localStorage
      setTimeout(() => {
        router.push("/dashboard"); // Redirect to Admin Dashboard after a delay
      }, 5000); // Redirect after 5 seconds
    } else {
      setError("Invalid username or password!"); // Show error if invalid credentials
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Admin Login</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {isLoading && (
          <p className="text-center text-gray-600 mt-4">Redirecting to dashboard...</p>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;





