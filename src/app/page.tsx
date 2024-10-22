import { Box, Container, Typography, Grid, Button } from "@mui/material";
import ProductCard from "./components/ProductCard";

const HomePage = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is an amazing product.",
      image: "/product-1.webp",
      price: "$99.99",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This product is very popular.",
      image: "/product-1.webp",
      price: "$149.99",
    },
    {
      id: 3,
      name: "Product 3",
      description: "A must-have product for everyone.",
      image: "/product-1.webp",
      price: "$199.99",
    },
    {
      id: 4,
      name: "Product 4",
      description: "You will love this product.",
      image: "/product-1.webp",
      price: "$249.99",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: "60vh", md: "80vh" },
          backgroundImage: 'url("/slider-1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)", // Dark overlay for better text visibility
          }}
        />
        <Box textAlign="center" sx={{ zIndex: 1, px: 2 }}>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Welcome to Our E-Commerce Store
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{ mt: 2, fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Discover the latest products at unbeatable prices.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 4, px: 4, py: 1.5, borderRadius: "8px" }}
            aria-label="Shop Now"
          >
            Shop Now
          </Button>
        </Box>
      </Box>

      {/* Featured Products Section */}
      <Container>
        <Box sx={{ py: 8 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Featured Products
          </Typography>
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={3}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
