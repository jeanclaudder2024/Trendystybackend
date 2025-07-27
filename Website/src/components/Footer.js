import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Instagram, Facebook, X, Youtube,  } from "lucide-react";
import { Link } from "react-router-dom";
import trendystyLogo from "../assets/Trendysty-Logo-nobg.png";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#0d1330", color: "#fff", px: 4, py: 2 }}>
      <footer className="footer">
        <div className="footer-content">
          {/* Left Logo + Stars + Phone + Social */}
          <div className="footer-column logo-section">
          <img
  src={trendystyLogo}
  alt="Trendysty Logo"
  style={{
    width: "150px",
    height: "auto",
    marginBottom: "1rem",
    filter: "drop-shadow(0 0 5px rgba(255,255,255,0.95))"
  }}
/>

            <div style={{ fontSize: "2rem", margin: "0.5rem 0" }}>★ ★ ★</div>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              YOUR DESTINATION FOR <br /> EXCLUSIVE & TRENDY FINDS
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <a href="#"><Facebook /></a>
              <a href="#"><Instagram /></a>
              <a href="#"><X /></a>
              <a href="#"><Youtube /></a>
              {/* <a href="#"><Pinterest /></a> */}
            </Box>
            <Typography variant="h6" sx={{ mt: 1, fontWeight: 700 }}>
              (202) 773-6521
            </Typography>
          </div>

          {/* Company Links */}
          <div className="footer-column">
            <Typography variant="h6">Company</Typography>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/faqs">FAQ</Link></li>
              {/* <li><Link to="/customer-service">Customer Service</Link></li> */}
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Support Info */}
          <div className="footer-column">
            <Typography variant="h6">Support</Typography>
            <Typography sx={{ mb: 1 }}>
              <a href="mailto:customersupport@trendysty.us" style={{ color: "#fff" }}>
                customersupport@trendysty.us
              </a>
            </Typography>
            <Typography sx={{ mb: 1 }}>
              Subscribe to our newsletter to receive our latest offers
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                placeholder="Your email address"
                variant="filled"
                size="small"
                sx={{ backgroundColor: "#fff", borderRadius: 1, flex: 1 }}
              />
              <Button variant="contained" sx={{ backgroundColor: "#c00000", color: "#fff" }}>
                Subscribe
              </Button>
            </Box>
        
          </div>
       
        </div>
        <div className="footer-links">
            <Link to="/terms-of-services">Terms of service</Link> |{" "}
            <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
            <Link to="/copyright-policy">Copyright Policy</Link> |{" "}
            <Link to="/return-policy">Return Policy</Link>
          </div>
        <div className="footer-bottom">
          <Typography variant="body2">
            © 2025. Trendysty.us all rights reserved.
          </Typography>
      
        </div>
      </footer>
    </Box>
  );
}

export default Footer;
