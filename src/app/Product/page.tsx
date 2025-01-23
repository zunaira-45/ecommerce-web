'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { useState, useEffect } from "react";
import sanityClient from "@sanity/client";

const sanity = sanityClient({
  projectId: "qep58c2d", 
  dataset: "production",
  apiVersion: "2025-01-13", 
  useCdn: true,
});


interface RawProduct {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  productImage: {
    asset: {
      url: string;
    };
  };
  tags: string[];
}


interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}


interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showBillingPanel, setShowBillingPanel] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    address: "",
  });

  const router = useRouter();

  // Fetch products from Sanity CMS
  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          productImage { asset -> { url } },
          tags
        }
      `;
      const data: RawProduct[] = await sanity.fetch(query); // Type the fetched data
      const mappedProducts = data.map((product) => ({
        id: product._id,
        title: product.title,
        price: product.price,
        description: product.description,
        discountPercentage: product.discountPercentage,
        imageUrl: product.productImage.asset.url,
        tags: product.tags,
      }));
      setProducts(mappedProducts);
    } catch (err) {
      console.error("Error fetching products", err);
    }
  };

 
  const addToCart = (product: Product) => {
    const newCartItem: CartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
    };
    setCart((prevCart) => [...prevCart, newCartItem]);
    setShowNotification(true);
    setShowBillingPanel(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  
  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price, 0);

  
  const handleCheckout = () => {
    if (!billingInfo.name || !billingInfo.address) {
      alert("Please fill out your billing information before checking out.");
      return;
    }

    const cartData = JSON.stringify(cart);
    router.push(`/checkout?cart=${encodeURIComponent(cartData)}`);
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">Products from API Data</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-slate-800 mt-2 text-sm">
                {product.description.length > 100
                  ? `${product.description.substring(0, 100)}...`
                  : product.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-slate-600 font-bold">${product.price.toFixed(2)}</p>
              </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <Link href={`/Product/${product.id}`}>
                <button className="mt-2 w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {showNotification && (
        <div className="notification fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-md z-50">
          Item added to cart!
        </div>
      )}

      {showBillingPanel && (
        <div className="side-panel fixed right-0 top-0 bg-white shadow-lg p-4 w-1/3 lg:w-1/4 h-full overflow-auto">
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
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md"
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
            onClick={handleCheckout}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCards;

