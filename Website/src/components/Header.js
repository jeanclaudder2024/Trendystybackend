import React, { useEffect, useState } from "react";
import TrendystyLogo from "../assets/Trendysty-Logo.png";
import { Menu, X, ChevronDown } from "lucide-react";

import { Link } from "react-router-dom";
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const categories = [
        "Health and Beauty",
        "Electronic Gadgets",
        "Unique Items",
        "Exotic Foods",
        "Sports and Fitness",
        "Home Appliance and Decor",
        "Kids and Babies",
        "Travel & Outdoor",
        "Office & Stationery",
        "Toys & Hobbies",
        "Auto & Accessories",
        "Books & Learning",
        "Gifts & Occasions",
        "Home Cleaning & Storage",
    ];

    const mid = Math.ceil(categories.length / 2);
    const firstColumn = categories.slice(0, mid);
    const secondColumn = categories.slice(mid);
    return ( <
        >
        <
        header className = { `header ${isScrolled ? "scrolled" : ""}` } >
        <
        div className = "main-header" >
        <
        div className = "header-right" >
        <
        Link to = "/" >
        <
        div className = "header-icons" >
        <
        img src = { TrendystyLogo }
        alt = "Trendysty Logo"
        className = "logo-image" /
        >
        <
        /div> <
        /Link> <
        /div> {
            /* <Link to="/">
                        <div className="logo">
                          <h1>TRENDYSTY US</h1>
                        </div>
                      </Link> */
        }

        <
        div className = "header-left" >
        <
        button className = "menu-button"
        onClick = { toggleMenu } > { isMenuOpen ? < X size = { 24 } /> : <Menu size={24} / > } <
        /button> <
        nav className = { `desktop-nav ${isMenuOpen ? "mobile-nav-open" : ""}` } >
        <
        ul className = "nav-links" >
        <
        li className = "nav-item" >
        <
        button className = "nav-link"
        style = {{ background: "none", border: "none", cursor: "pointer", color: "inherit", font: "inherit" }} >
        Categories < ChevronDown size = { 16 }
        /> <
        /button> <
        div className = "dropdown-menu" >
        <
        div className = "dropdown-content" >
        <
        div className = "menu-column" >
        <
        h4 > Shop by Category < /h4> <
        ul > {
            categories.map((category, i) => ( <
                li key = { i } >
                <
                Link to = { `/productspage?category=${encodeURIComponent(
                                  category
                                )}` } >
                { category } <
                /Link> <
                /li>
            ))
        } <
        /ul> <
        /div> <
        /div> <
        /div> <
        /li> <
        /ul> <
        /nav> <
        /div> <
        /div> <
        /header>

        { /* Mobile Menu Overlay */ } <
        div className = { `mobile-menu-overlay ${isMenuOpen ? "open" : ""}` } >
        <
        div className = "mobile-menu-content" >
        <
        span className = "nav-link" > Categories < /span>

        <
        button className = "close-menu"
        onClick = { toggleMenu } >
        <
        X size = { 24 }
        /> <
        /button> <
        div style = {
            { display: "flex", gap: "30px" } } >
        <
        ul > {
            firstColumn.map((category, i) => ( <
                li key = { `col1-${i}` } >
                <
                Link to = { `/productspage?category=${encodeURIComponent(
                      category
                    )}` }
                onClick = { toggleMenu } >
                { category } <
                /Link> <
                /li>
            ))
        } <
        /ul> <
        ul > {
            secondColumn.map((category, i) => ( <
                li key = { `col2-${i}` } >
                <
                Link to = { `/productspage?category=${encodeURIComponent(
                      category
                    )}` }
                onClick = { toggleMenu } >
                { category } <
                /Link> <
                /li>
            ))
        } <
        /ul> <
        /div> <
        /div> <
        /div> <
        />
    );
}