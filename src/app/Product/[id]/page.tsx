"use client";
import React, { useState } from "react";
import { notFound } from "next/navigation"; 
import sanityClient from "@sanity/client";
import Topbar from "@/app/Components/Topbar"; 
import Testimonial from "@/app/Components/testimonials"; 
import Footer from "@/app/Components/Footer"; 
import Navbar from "@/app/Components/Navbar";

const sanity = sanityClient({
  projectId: "qep58c2d", 
  dataset: "production",
  apiVersion: "2025-01-13",
  useCdn: true,
});

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  tags: string[];
}

const fetchProduct = async (id: string): Promise<Product | null> => {
  const query = `
    *[_type == "product" && _id == $id][0] {
      _id,
      title,
      price,
      description,
      "imageUrl": productImage.asset->url,
      tags
    }
  `;
  const product = await sanity.fetch(query, { id });
  return product
    ? {
        id: product._id,
        title: product.title,
        price: product.price,
        description: product.description,
        imageUrl: product.imageUrl,
        tags: product.tags,
      }
    : null;
};

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [billingInfo, setBillingInfo] = useState({ name: "", address: "" });
  const [showNotification, setShowNotification] = useState(false);
  const [showBillingPanel, setShowBillingPanel] = useState(false);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    const loadProduct = async () => {
      try {
        const fetchedProduct = await fetchProduct(id);
        if (!fetchedProduct) {
          setError("Product not found");
        } else {
          setProduct(fetchedProduct);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load product");
      }
    };
    loadProduct();
  }, [id]);

  const addToCart = () => {
    if (product) {
      setCart((prevCart) => [...prevCart, product]);
      setShowNotification(true);
      setShowBillingPanel(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price, 0);

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  if (!product) {
    return <div className="p-4 text-gray-500">Loading product details...</div>;
  }

  return (
    <div className="p-4">
     
      <Topbar />
      <Navbar/>

      <h1 className="text-center text-2xl font-bold mb-4">{product.title}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="object-cover rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-6 mt-6 md:mt-0">
          <p className="text-lg font-semibold text-gray-800">${product.price}</p>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <div className="mt-6">
            <p className="font-bold">Tags:</p>
            <div>
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-md mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <button
            onClick={addToCart}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>

    
      {showNotification && (
        <div className="notification fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-md z-50">
          Item added to cart!
        </div>
      )}

      
      {showBillingPanel && (
        <div className="side-panel fixed right-0 top-0 bg-white shadow-lg p-4 w-full md:w-1/4 h-full overflow-auto z-50">
          <h3 className="text-lg font-bold mb-4">Billing Information</h3>
          <input
            type="text"
            name="name"
            value={billingInfo.name}
            onChange={handleBillingChange}
            placeholder="Enter your name"
            className="w-full border p-2 rounded-md mb-4"
          />
          <input
            type="text"
            name="address"
            value={billingInfo.address}
            onChange={handleBillingChange}
            placeholder="Enter your address"
            className="w-full border p-2 rounded-md mb-4"
          />

          <h3 className="text-lg font-bold mt-4">Your Cart</h3>
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 bg-gray-100 p-2 rounded-md"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="rounded-md w-12 h-12 object-cover"
                />
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold text-lg">
            Grand Total: ${calculateTotal().toFixed(2)}
          </div>
          <button
            onClick={() => alert("Proceed to checkout!")}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Checkout
          </button>
        </div>
      )}

      
      <Testimonial />

    
      <Footer />
    </div>
  );
};

export default ProductDetails;
