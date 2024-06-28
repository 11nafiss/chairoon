import { styled} from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: "#fff",
  border: "2px solid #252525",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  height: "40px",
  width: "inherit"
}));

export default Search;
