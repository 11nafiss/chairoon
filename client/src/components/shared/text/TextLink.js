import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const TextLink = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 600,
  textDecoration: "underline",
  color: "blue",
}));

export default TextLink;
