import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image,
  price,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 40px rgba(0, 0, 0, 0.2)",
        },
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt={`${name} image`}
        sx={{
          objectFit: "cover",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />
      <CardContent >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mb: 1, fontSize: "1.25rem" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, fontSize: "0.95rem" }}
        >
          {description}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1976d2" }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions >
        <Button
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<ShoppingCartIcon />}
          sx={{
            borderRadius: "10px",
            padding: "12px",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#155a9c",
            },
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
