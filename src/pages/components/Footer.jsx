import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../assests/tatvasoft.jpg";
const Footer = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        marginTop: "80px",
      }}
    >
      <img src={logo} alt="logo" />
      <Typography variant="body1" gutterBottom>
        @2023 Tatvasoft.com All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
