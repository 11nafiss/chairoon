import React from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { House, List } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogoScape from "../../components/shared/LogoScape";

const navlist = ["Back"];

const NavbarAuth = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container
          maxWidth="xl"
          sx={{ backgroundColor: "#fff", height: "72px" }}
        >
          <Toolbar disableGutters sx={{ height: "72px" }}>
            <Box sx={{ ml: { xs: 2, md: 2, lg: 7 } }}>
              <Link to="/welcome" style={{ textDecoration: "none", color: "inherit" }}>
                <LogoScape />
              </Link>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "none" }, mr: { xs: 2, md: 7 } }}>
              <IconButton
                sx={{
                  width: "max-content",
                  color: theme.palette.mode === "light" ? "#080707" : theme.palette.text.primary,
                }}
                onClick={() => navigate(`/welcome`)}
              >
                <House size={32} weight="fill" />
              </IconButton>
            </Box>

            <Box sx={{ display: { xs: "none", md: "none" } }}>
              <Tooltip title="Open settings">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                  color="inherit"
                >
                  <List size={32} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseUserMenu}
              >
                {navlist.map((values) => (
                  <MenuItem key={values} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{values}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavbarAuth;
