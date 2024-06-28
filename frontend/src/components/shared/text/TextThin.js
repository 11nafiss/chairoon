import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const TextThin = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  "&:first-letter": {
    textTransform: "capitalize",
  }
}));

export default TextThin;
