import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const TextBody = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 600,
  "&:first-letter": {
    textTransform: "capitalize",
  }
}));

export default TextBody;
