import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const GreyBox = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100%",
    backgroundColor: "#f1f3f4",
    border: "2px solid #858585",
    borderRadius: "15px",
    padding: "10px",
}));

export default GreyBox;