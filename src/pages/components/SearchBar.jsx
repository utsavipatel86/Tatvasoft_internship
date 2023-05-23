import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

const SearchBar = () => {
  return (
    <Box
      sx={{
        height: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <TextField
        type="text"
        placeholder="What are you looking for ..."
        size="small"
      sx={{width:"422px"}}
      
      />
      <Button
        variant="contained"
        
        sx={{ textTransform: "capitalize", backgroundColor:"#80bf32" }}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
      <Button
        variant="contained"
        color="error"
        sx={{ textTransform: "capitalize" ,backgroundColor:"#f14d54"}}
      >
        Cancle
      </Button>
    </Box>
  );
};

export default SearchBar;
