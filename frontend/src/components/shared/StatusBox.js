import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StatusBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  padding: "7px",
  alignItems: "center",
  borderRadius: "10px",
  justifyContent: "center",
}));

export default StatusBox;
