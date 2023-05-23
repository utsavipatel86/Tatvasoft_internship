import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assests/tatvasoft.jpg";

import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
};

const Navbar = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "92px",
        }}
      >
        <img src={logo} alt="logo" />
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Stack
            direction="row"
            spacing={1}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Link to="/login" style={linkStyle}>
              <Button
                variant="text"
                color="error"
                sx={{ textTransform: "capitalize" }}
              >
                Login
              </Button>
            </Link>
            <Link to="/register" style={linkStyle}>
              <Button
                variant="text"
                color="error"
                sx={{ textTransform: "capitalize" }}
              >
                Register
              </Button>
            </Link>
          </Stack>
          <Link to="/cart" style={linkStyle}>
            <Button
              variant="outlined"
              color="error"
              startIcon={<ShoppingCartIcon style={{ color: "#c62828" }} />}
            >
              <span style={{ color: "#c62828", marginRight: "5px" }}>0</span>
              Cart
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
