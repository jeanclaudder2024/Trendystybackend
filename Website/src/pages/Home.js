import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Star, TrendingUp } from "lucide-react";
import "../style/Home.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { fetchItems, getImageUrl } from "../services/Products";
import TrendystyLogo from "../assets/Trendysty-Logo.png";
import dhl from "../assets/dhl-logo.svg";
import fedex from "../assets/fedex-logo.png";
import ups from "../assets/UPS-logo.png";
import shipbob from "../assets/shipBob-logo.jpg";
import TopBrandingProducts from "../components/TopBrandingProducts.js";
import SectionDivider from "../components/SectionDivider";
const Home = () => {
  const featuredRef = useRef(null);
  const topsref = useRef(null);
  const [tops, setTops] = useState([]);
  const [products, setProducts] = useState([]);
  const handleScrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await fetchItems(); // Fetch featured items
        setProducts(data);
        const filtered = data.filter((item) => item.topSelling);
        setTops(filtered);
      } catch (err) {
        console.error("Failed to fetch items", err);
      }
    };

    getItems();
  }, []);

  const categoriesRef = useRef(null);

  const scrollLeft = (section) => {
    if (section === "topsleft") {
      topsref.current.scrollBy({ left: -500, behavior: "smooth" });
    } else if (section === "categoriesleft") {
      categoriesRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = (section) => {
    if (section === "topsright") {
      topsref.current.scrollBy({ left: 500, behavior: "smooth" });
    } else if (section === "categoriesright") {
      categoriesRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  const categories = [
    {
      title: "Electronic Gadgets",
      img: "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Health and Beauty",
      img: "https://images.pexels.com/photos/2566853/pexels-photo-2566853.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Unique Items",
      img: "https://images.pexels.com/photos/5865343/pexels-photo-5865343.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Exotic Foods",
      img: "https://images.pexels.com/photos/9393932/pexels-photo-9393932.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Sports and Fitness",
      img: "https://images.pexels.com/photos/6339715/pexels-photo-6339715.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Home Appliance and Decor",
      img: "https://images.pexels.com/photos/6186526/pexels-photo-6186526.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Kids and Babies",
      img: "https://images.pexels.com/photos/19471464/pexels-photo-19471464/free-photo-of-baby-bodysuit-and-pair-of-shoes-on-tree-trunk.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Travel & Outdoor",
      img: "https://images.pexels.com/photos/1840421/pexels-photo-1840421.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Office & Stationery",
      img: "https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Auto & Accessories",
      img: "https://images.pexels.com/photos/842528/pexels-photo-842528.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Toys & Hobbies",
      img: "https://images.pexels.com/photos/7296807/pexels-photo-7296807.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Books & Learning",
      img: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Gifts & Occasions",
      img: "https://images.pexels.com/photos/1303082/pexels-photo-1303082.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Home Cleaning & Storage",
      img: "https://images.pexels.com/photos/10568483/pexels-photo-10568483.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>TRENDY FINDS | EXCLUSIVE DEALS | GLOBAL PRODUCTS</h1>
          <p>Shop High-Quality Products from Around the World</p>
          <div className="hero-buttons" onClick={handleScrollToFeatured}>
            <span className="btn btn-primary">Shop Now</span>
          </div>
        </div>
      </section>
      <SectionDivider />
      {/* Tops */}
      <section className="new-arrivals">
        <div className="section-header">
          <h2>Top Products</h2>
          <p>Trending in USA Now</p>
        </div>

        <div className="scroll-container-wrapper">
          <button
            className="scroll-btn left"
            onClick={() => scrollLeft("topsleft")}
          >
            <ArrowBackIos fontSize="small" />
          </button>

          <div className="products-slider" ref={topsref}>
            {tops.map((item, i) => (
              <div className="product-card" key={i}>
                <span className="product-number">{i + 1}</span>
                <div className="product-image">
                  <Link to={item.link || "#"} target="_blank">
                    <img
                      src={getImageUrl(item.imageFileId) || TrendystyLogo}
                      alt={item.name || `Product ${i + 1}`}
                    />
                    </Link>
              
                  <span
                    className={`flag-icon fi fi-${(item.country || "us")
                      .toLowerCase()
                      .slice(0, 2)}`}
                    aria-label={`flag-${item.country || "us"}`}
                  ></span>
                </div>
              </div>
            ))}
          </div>

          <button
            className="scroll-btn right"
            onClick={() => scrollRight("topsright")}
          >
            <ArrowForwardIos fontSize="small" />
          </button>
        </div>
      </section>
      <SectionDivider />

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-header">
          <h2>Why Choose TRENDYSTY</h2>
        </div>
        <div className="testimonials-slider">
          <div className="testimonial-card">
            <p className="customer-name">Unique</p>
            <p className="testimonial-text">
              A one-of-a-kind shopping experience with exclusive, hard-to-find
              products
            </p>
            <Star size={24} className="sparkles-icon" />
          </div>
          <div className="testimonial-card">
            <p className="customer-name">Trendy</p>
            <p className="testimonial-text">
              Always ahead of the curve, bringing the latest global trends to
              your doorstep.
            </p>
            <TrendingUp size={24} className="trending-icon" />
          </div>
          <div className="testimonial-card">
            <p className="customer-name">Stylish</p>
            <p className="testimonial-text">
              Carefully curated selections that blend fashion, function, and
              flair.
            </p>
            <Sparkles size={24} className="sparkles-icon" />
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* Featured Products */}
      <section className="featured-products">
        <div className="section-header">
          <h2>Trending Now</h2>
          <p>Our Exclusive Products</p>
        </div>
        <div className="products-slider-loop">
          <div className="products-track">
            {[...Array(2)].flatMap((_, repeat) =>
              products.map((item, index) => (
                <div
                  className="product-card"
                  key={`${repeat}-${item.id || index}`}
                >
                  <div className="product-image">
                    <img
                      src={getImageUrl(item.imageFileId) || { TrendystyLogo }}
                      alt={item.name || `Product ${index + 1}`}
                    />
                    <span
                      className={`flag-icon fi fi-${(item.country || "us")
                        .toLowerCase()
                        .slice(0, 2)}`}
                      // style={{ zIndex: 100000 }}
                      aria-label={`flag-${item.country || "us"}`}
                    ></span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <SectionDivider />

      {/*  Categories */}
      <section className="featured-categories" ref={featuredRef}>
        <div className="section-header">
          <h2>Shop by Category</h2>
          <p>Explore Our Collection</p>
        </div>

        <div className="scroll-container-wrapper">
          <button
            className="scroll-btn left"
            onClick={() => scrollLeft("categoriesleft")}
          >
            <ArrowBackIos fontSize="small" />
          </button>
          <div className="category-scroll-container" ref={categoriesRef}>
            {categories.map((cat, i) => (
              <div className="category-card" key={i}>
                <img src={cat.img} alt={cat.title} />
                <div className="category-overlay">
                  <h3>{cat.title}</h3>
                  <Link
                    to={`/productspage?category=${cat.title}`}
                    className="cat-link"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button
            className="scroll-btn right"
            onClick={() => scrollRight("categoriesright")}
          >
            <ArrowForwardIos fontSize="small" />
          </button>
        </div>
      </section>
      <SectionDivider />

      <TopBrandingProducts />
      <SectionDivider />

      {/* shipping partner  */}
      <section className="shipping-partners">
        <div className="section-header">
          <h2>Our Shipping Partners</h2>
          <p>
            We partner with world-leading logistics providers to ensure fast and
            reliable delivery worldwide
          </p>
        </div>

        <div className="scroll-container-wrapper">
          <div className="partners-slider">
            {[
              { name: "DHL", img: dhl },
              { name: "FedEx", img: fedex },
              { name: "UPS", img: ups },
              { name: "ShipBob", img: shipbob },
            ].map((partner, i) => (
              <div className="partner-card" key={i}>
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
