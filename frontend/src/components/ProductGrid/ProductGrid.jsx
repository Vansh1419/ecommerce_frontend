import { Grid } from "@mui/material";
import ProductCard from "../common/ProductCard/ProductCard";

function ProductGrid({ query }) {
  return (
    <Grid container spacing={{ xs: 1, sm: 2 }}>
      {cardList.map((card, index) => {
        return (
          <Grid item xs={6} lg={3} md={4} key={index}>
            <ProductCard card={card} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ProductGrid;

const cardList = [
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
  {
    imgUrl:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/333764a.jpg?ts=1588911583",
    title: "Aashirvaad Shudh Chakki Whole Wheat Atta (5 kg)",
    label: "5 kg",
    actualPrice: "222",
    discountedPrice: "233",
  },
];
