import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const BookCard = ({ data }) => {
  return (
    <Card sx={{ minWidth: 200, borderRadius: "8px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={data.base64image}
          alt="iamge"
        />
        <CardContent>
          <Typography variant="h5" >{data.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {data.categoryId}
          </Typography>
          <Typography variant="body1" gutterBottom color="text.primary">
            {data.description}
          </Typography>
          <Typography variant="body1" gutterBottom color="text.primary">
            MRP ₹ {data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          type="submit"
          variant="contained"
          color="error"
          sx={{
            backgroundColor: "#f14d54",
          }}
          fullWidth
        >
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
