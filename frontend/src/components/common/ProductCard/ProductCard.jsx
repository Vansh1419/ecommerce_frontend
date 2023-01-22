import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

function ProductCard({ card }) {
  const discountPercentage = ((Math.abs(card.actualPrice - card.discountedPrice) / card.actualPrice)*100).toFixed(2)
  return (
    <Card elevation={1} sx={{padding:"8px"}}>
      <Stack alignItems="end">
        <Chip
          color="primary"
          label={`${discountPercentage}% OFF`}
          size="small"
          sx={{ fontSize: "11px", fontWeight: "500" }}
        />
        <CardMedia
          image={card.imgUrl}
          sx={{ height: "140px", width: "140px", alignSelf:"center"}}
        />
      </Stack>
      <CardContent>
        <Typography fontSize={{xs:12, sm:14}} marginBottom={1}>
          {card.title}
        </Typography>
        <Typography fontSize={{xs:10, sm:12}} marginBottom={1}>
            {/*  product quantity or label */}
          {card.label}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Box paddingTop={1.5}>
            <Typography fontSize={{xs:12, sm:14}}>₹{card.actualPrice}</Typography>
            <Typography
              fontSize={{xs:10, sm:12}}
              sx={{ textDecoration: "line-through" }}
              color="GrayText"
            >
              ₹{card.discountedPrice}
            </Typography>
          </Box>
          <Button variant="outlined" color="success" size="small">
            ADD
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
