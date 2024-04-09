import SearchIcon from "@mui/icons-material/Search";
import { styled, InputBase } from "@mui/material";
const Search = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 2,
    border: 2,
    borderColor: "black",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "25ch",
        },
      },
    },
  }));
  return (
    <Search sx={{ border: 1, borderRadius: 4 }}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        type="text"
        placeholder="Хайх..."
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};
export default Search;
