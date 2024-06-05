import React, { useEffect } from "react";
import BodyBox from "../../../components/shared/BodyBox";
import ContainerMid from "../../../components/shared/ContainerMid";
import StackBody from "../../../components/shared/stack/StackBody";
import BoxGiant from "../../../components/shared/wrapper/BoxGiant";
import StackCol from "../../../components/shared/stack/StackCol";
import BoxSmall from "../../../components/shared/wrapper/BoxSmall";
import TextTitle from "../../../components/shared/text/TextTitle";
import { useDispatch, useSelector } from "react-redux";
import StackRow from "./../../../components/shared/stack/StackRow";
import { AppBar, Avatar, Box, Tab, Tabs, useTheme } from "@mui/material";
import TextBody from "./../../../components/shared/text/TextBody";
import GridBox from "../../../components/shared/GridBox";
import ButtonText from "../../../components/shared/button/ButtonText";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserProfile } from "../../../redux/slices/app";
import ButtonIcon from "../../../components/shared/button/ButtonIcon";
import { FilePdf, GearSix, LinkSimple, PaperPlaneTilt } from "@phosphor-icons/react";
import Swal from "sweetalert2";
import OutboxPersonal from "../../../components/compProfile/OutboxPersonal";
import OutboxSocial from "../../../components/compProfile/OutboxSocial";
import TextLink from "../../../components/shared/text/TextLink";
import SectionProfile from "../../../components/compProfile/SectionProfile";
import SectionPost from "../../../components/compProfile/SectionPost";
import SectionJobs from "../../../components/compProfile/SectionJobs";
import SectionSaved from "../../../components/compProfile/SectionSaved";

const PageProfile = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    dispatch(FetchUserProfile(username));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const currentUser = useSelector((state) => state.app.currentUser);
  const user = useSelector((state) => state.app.user);
  console.log("🚀 ~ PageProfile ~ user:", user);

  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const shareLink = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {
      Swal.fire({
        icon: "success",
        title: "Hurray...",
        text: "Profile link copied.",
        duration: 3000,
      });
    });
  };

  return (
    <BodyBox>
      <ContainerMid maxWidth="md">
        <StackBody gap={3}>
          <StackCol gap={3} sx={{ width: "30%" }}>
            <BoxSmall>
              <OutboxPersonal user={user} />
            </BoxSmall>
            <BoxSmall>
              <OutboxSocial user={user} />
            </BoxSmall>
          </StackCol>
          <BoxGiant sx={{ width: "70%" }}>
            <StackCol gap={2}>
              <TextTitle
                sx={{
                  "&:first-letter": {
                    textTransform: "lowercase",
                  },
                }}
              >
                {user?.username}
              </TextTitle>
              <GridBox gap={2}>
                <Avatar
                  alt={user?.username}
                  src={user?.avatar}
                  sx={{
                    width: 100,
                    height: 100,
                    gridColumn: "span 2",
                    gridRow: "span 2",
                  }}
                />
                <StackCol
                  sx={{
                    gridColumn: "span 6",
                    gridRow: "span 2",
                    justifyContent: "center",
                    height: "inherit",
                    pl: "20px",
                  }}
                >
                  <TextTitle>{`${user?.firstName} ${user?.lastName}`}</TextTitle>
                  <StackRow gap={2}>
                    <TextBody>{`${user.followers.length} Followers`}</TextBody>
                    <TextBody>{`${user.following.length} Following`}</TextBody>
                  </StackRow>
                </StackCol>
                {currentUser._id === user._id ? (
                  <ButtonText onClick={() => navigate(`/ch/${user.username}/update`)}>
                    Edit Profile
                  </ButtonText>
                ) : (
                  <ButtonText>Follow</ButtonText>
                )}
                {currentUser._id === user._id ? (
                  <ButtonText>Add Post</ButtonText>
                ) : (
                  <ButtonText>Message</ButtonText>
                )}
                <StackCol sx={{ gridColumn: "span 8" }} gap={0.5}>
                  <TextBody>{user.headline}</TextBody>
                  {user.profileWeb.length !== 0 &&
                    user.profileWeb.map((value, index) => (
                      <StackRow gap={0.5} key={index}>
                        <LinkSimple size={18} weight="bold" />
                        <Link to={`${value.linkUrl}`}>
                          <TextLink>{value.linkName}</TextLink>
                        </Link>
                      </StackRow>
                    ))}
                </StackCol>
                <Box
                  sx={{
                    gridColumn: "span 4",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <ButtonIcon onClick={() => navigate(`/ch/${user.username}/resume`)}>
                    <FilePdf size={32} weight="bold" />
                  </ButtonIcon>
                  <ButtonIcon onClick={shareLink}>
                    <PaperPlaneTilt size={32} weight="bold" />
                  </ButtonIcon>
                  <ButtonIcon>
                    <GearSix size={32} weight="bold" />
                  </ButtonIcon>
                </Box>
              </GridBox>
              <AppBar position="static" sx={{ bgcolor: "#f0f0f0", mb: "10px" }}>
                <Tabs
                  value={activeTab}
                  onChange={handleChange}
                  indicatorColor="primary"
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  sx={{ "& .MuiTabs-flexContainer": { justifyContent: "center" } }}
                >
                  <Tab label="Profile" {...a11yProps(0)} />
                  <Tab label="Post" {...a11yProps(1)} />
                  <Tab label="Jobs" {...a11yProps(2)} />
                  {currentUser._id === user._id ? (
                    <Tab label="Saved" {...a11yProps(3)} />
                  ) : null}
                </Tabs>
              </AppBar>
              <Box sx={{ height: "100%", overflow: "hidden" }}>
                {activeTab === 0 && (
                  <SectionProfile
                    user={user}
                    activeTab={activeTab}
                    index={0}
                    dir={theme.direction}
                  />
                )}
                {activeTab === 1 && (
                  <SectionPost
                    user={user}
                    activeTab={activeTab}
                    index={1}
                    dir={theme.direction}
                  />
                )}
                {activeTab === 2 && (
                  <SectionJobs
                    user={user}
                    activeTab={activeTab}
                    index={2}
                    dir={theme.direction}
                  />
                )}

                {activeTab === 3 && (
                  <SectionSaved
                    user={user}
                    activeTab={activeTab}
                    index={3}
                    dir={theme.direction}
                  />
                )}
              </Box>
            </StackCol>
          </BoxGiant>
        </StackBody>
      </ContainerMid>
    </BodyBox>
  );
};

export default PageProfile;

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
