import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/TopBrandingProducts.css";
import productImage from "../assets/Trendysty-Logo.png"; // fallback image
import { fetchItems, getImageUrl } from "../services/Products";

function TopBrandingProducts() {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await fetchItems(category);
        console.log("Fetched data:", data);

        if (data && Array.isArray(data)) {
          let filteredProducts;

          if (location.pathname === "/") {
            // ✅ If home page → filter topbrand === true
            filteredProducts = data.filter((item) => item.topbrand === true);
            console.log("Filtered topbrand products:", filteredProducts);
          } else {
            // ✅ Else (category page) → filter top3 === true
            filteredProducts = data.filter((item) => item.top3 === true);
            console.log("Filtered top3 products:", filteredProducts);
          }

          setProducts(filteredProducts);
        } else {
          console.warn("Fetched data is not an array:", data);
        }
      } catch (err) {
        console.error("Failed to fetch items", err);
      }
    };

    getItems();
  }, [category, location.pathname]); // ✅ re-run when path or category changes

  return (
    <div className="top-branding-section">
      <h2>
        <span className="outline-text">OUR</span>{" "}
        <span className="highlight-text">
          TOP {category ? category : "BRANDS"}
        </span>{" "}
        <span className="outline-text">PRODUCTS</span>
      </h2>
      <div className="top-products-container">
        {products.length === 0 && <p>No top products found.</p>}

        {products.map((item, index) => {
          const flagCode = (item.country || "us").toLowerCase().slice(0, 2);
          const imageSrc = getImageUrl
            ? getImageUrl(item.imageFileId)
            : productImage;

          return (
            <div key={item.id || index} className="top-product-card">
              <div className="top-product-number">{index + 1}</div>
              <Link to={item.link || "#"} target="_blank">
                <img
                  src={imageSrc}
                  alt={`Product ${item.id}`}
                  className="top-product-image"
                />
              </Link>
              <span
                className={`flag-icon fi fi-${(flagCode || "us")
                  .toLowerCase()
                  .slice(0, 2)}`}
                aria-label={`flag-${flagCode || "us"}`}
              ></span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopBrandingProducts;
