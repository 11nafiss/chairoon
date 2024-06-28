import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const TextTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 600,
  "&:first-letter": {
    textTransform: "capitalize",
  }
}));

export default TextTitle;
