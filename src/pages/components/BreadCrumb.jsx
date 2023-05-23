import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const BreadCrumb = () => {
  const breadcrumbs = [
    <Link key="1" style={linkStyle} to="/">
      Home
    </Link>,
    <Link key="2" style={linkStyle} to="/register">
      Create an Account
    </Link>,
  ];
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      sx={{ marginY: "20px", display: "flex", justifyContent: "center" }}
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
};

export default BreadCrumb;
