import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Box,
  Rating,
} from "@mui/material";
import { fetchItems, getImageUrl } from "../services/Products";
import { useLocation } from "react-router-dom";
import TopBrandingProducts from "../components/TopBrandingProducts.js";
const ProductsPage = () => {
  const [visibleRows, setVisibleRows] = useState(2);
  const productsPerRow = 4;

  const handleShowMore = () => {
    setVisibleRows((prev) => prev + 2);
  };
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await fetchItems(category); // dynamically use category from URL
        console.log(data);
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch items", err);
      }
    };

    if (category) getItems();
  }, [category]);

  const sampleProducts = products.map((item, i) => ({
    id: item?.id,
    name: item?.name || "Product Name",
    image: item?.image || "https://via.placeholder.com/150",
    imageFileId: item?.imageFileId,
    price: item?.price || "N/A",
    discount: item?.discount || 0,
    rating: item?.rating || 0,
    totalSales: item?.totalSales || 0,
  }));

  const displayedProducts = sampleProducts.slice(
    0,
    visibleRows * productsPerRow
  );

  return (
    <Box
      p={4}
      style={{
        marginTop: "11vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        alighitems: "center",
      }}
    >
      <TopBrandingProducts />
      <Typography variant="h4" gutterBottom align="center" color="#99161d">
        {category} Products
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {displayedProducts.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={product.id}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: 280,
                height: 380,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image={getImageUrl(product.imageFileId)}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: 230,
                  objectFit: "cover",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              />
              <CardContent sx={{ flexGrow: 1, color: "#141C40" }}>
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="text.secondary">${product.price}</Typography>
                {product.discount !== 0 && (
                  <Typography
                    sx={{
                      color: "#99161d",
                      textDecoration: "line-through",
                      fontSize: "0.9rem",
                    }}
                  >
                    ${product.discount}
                  </Typography>
                )}
                <Box display="flex" alignItems="center" mt={1}>
                  <Rating
                    value={parseFloat(product.rating)}
                    precision={0.1}
                    readOnly
                    size="small"
                  />
                  <Typography variant="caption" ml={1}>
                    ({product.rating})
                  </Typography>
                </Box>
                <Typography variant="caption" display="block" mt={1}>
                  Total Sales: {product.totalSales}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {visibleRows * productsPerRow < sampleProducts.length && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="contained" onClick={handleShowMore}>
            Show More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ProductsPage;
