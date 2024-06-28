import React from "react";
import { AppBar, Box, Container, Stack, Toolbar } from "@mui/material";
import LogoScape from "./../../components/shared/LogoScape";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchWrapper from "../../components/shared/search/SearchWrapper";
import SearchIcon from "../../components/shared/search/SearchIcon";
import StyledInputBase from "./../../components/shared/search/StyledInputBase";
import { MagnifyingGlass, User } from "@phosphor-icons/react";
import SelectWrapper from "./../../components/shared/select/SelectWrapper";
import MenuItemStyle from "./../../components/shared/select/MenuItemStyle";
import { LogoutUser } from "../../redux/slices/auth";
import TextBody from "../../components/shared/text/TextBody";

const NavbarHome = () => {
  const { currentUser } = useSelector((state) => state.app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(LogoutUser());
    navigate(`/login`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#fff" }}>
        <Container maxWidth="md" sx={{ backgroundColor: "#fff", height: "72px" }}>
          <Toolbar disableGutters sx={{ height: "inherit" }}>
            <Box sx={{ width: "250px" }}>
              <SearchWrapper>
                <SearchIcon>
                  <MagnifyingGlass size={20} weight="bold" color="#252525" />
                </SearchIcon>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </SearchWrapper>
            </Box>
            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ width: "250px" }}>
              <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
                <LogoScape />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ width: "250px" }}>
              <Stack
                direction="row"
                spacing={2}
                sx={{ width: "250px", display: "flex", justifyContent: "end" }}
              >
                <SelectWrapper value={0} sx={{ color: "#252525" }}>
                  <MenuItemStyle value={0} disabled sx={{ display: "none" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <User size={20} />
                      <TextBody>{`Hello ${currentUser.firstName}`}</TextBody>
                    </Box>
                  </MenuItemStyle>
                  <MenuItemStyle onClick={() => navigate(`/ch/${currentUser.username}`)}>
                    My Profile
                  </MenuItemStyle>
                  {/* <MenuItemStyle onClick={() => navigate(`/chats`)}>
                    My Chats
                  </MenuItemStyle> */}
                  {currentUser.role === "recruiter" && (
                    <MenuItemStyle onClick={() => navigate(`/recruit`)}>
                      My Requests
                    </MenuItemStyle>
                  )}
                  {currentUser.role === "user" && (
                    <MenuItemStyle onClick={() => navigate(`/active`)}>
                      My Activities
                    </MenuItemStyle>
                  )}
                  {/* <MenuItemStyle onClick={() => navigate(`/setting`)}>
                    Setting
                  </MenuItemStyle> */}
                  <MenuItemStyle onClick={handleLogOut}>Log Out</MenuItemStyle>
                </SelectWrapper>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavbarHome;
