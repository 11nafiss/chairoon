import React, { useState } from "react";
import BodyBox from "../../../components/shared/BodyBox";
import ContainerMid from "../../../components/shared/ContainerMid";
import StackBody from "../../../components/shared/stack/StackBody";
import BoxPotrait from "../../../components/shared/wrapper/BoxPotrait";
import BoxGiant from "../../../components/shared/wrapper/BoxGiant";
import StackCol from "../../../components/shared/stack/StackCol";
import TextTitle from "../../../components/shared/text/TextTitle";
import { Box, Tabs } from "@mui/material";
import TabOption from "../../../components/shared/TabOption";
import ButtonText from "../../../components/shared/button/ButtonText";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StackRow from "../../../components/shared/stack/StackRow";
import FormPersonal from "./../../../components/compProfile/FormPersonal";
import FormExperience from "../../../components/compProfile/FormExperience";
import FormEducation from "../../../components/compProfile/FormEducation";
import FormOrganization from "../../../components/compProfile/FormOrganization";
import FormAchievement from "../../../components/compProfile/FormAchievement";
import FormContact from "../../../components/compProfile/FormContact";
import FormSecurity from "../../../components/compProfile/FormSecurity";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const PageUserEdit = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.app);
  console.log("🚀 ~ PageUserEdit ~ currentUser:", currentUser)

  const handleNext = () => {
    setActiveTab((Tab) => Tab + 1);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <BodyBox>
      <ContainerMid maxWidth="md">
        <StackBody gap={3}>
          <BoxPotrait sx={{ width: "30%" }}>
            <StackCol gap={2}>
              <TextTitle>Edit Profile</TextTitle>
              <Tabs
                orientation="vertical"
                value={activeTab}
                onChange={handleTabChange}
                sx={{ borderRight: 3, borderColor: "divider" }}
              >
                <TabOption label="Personal Info" value={0} {...a11yProps(0)} />
                <TabOption label="Experience" {...a11yProps(1)} />
                <TabOption label="Education" {...a11yProps(2)} />
                <TabOption label="Organization" {...a11yProps(3)} />
                <TabOption label="Achievement" {...a11yProps(4)} />
                <TabOption label="Contact Info" {...a11yProps(5)} />
                <TabOption label="Security Info" {...a11yProps(6)} />
              </Tabs>
              <Box sx={{ flexGrow: 1 }} />
              <StackRow gap={2} sx={{ mb: "10px" }}>
                <ButtonText
                  onClick={() => navigate(-1)}
                  sx={{ bgcolor: "red", color: "white" }}
                >
                  Back
                </ButtonText>
                <ButtonText
                  onClick={() => navigate(`/ch/${currentUser.username}/resume`)}
                >
                  Preview
                </ButtonText>
              </StackRow>
            </StackCol>
          </BoxPotrait>
          <BoxGiant sx={{ width: "70%" }}>
            {activeTab === 0 && (
              <FormPersonal activeTab={activeTab} index={0} onNext={handleNext} />
            )}
            {activeTab === 1 && (
              <FormExperience activeTab={activeTab} index={1} onNext={handleNext} />
            )}
            {activeTab === 2 && (
              <FormEducation activeTab={activeTab} index={2} onNext={handleNext} />
            )}
            {activeTab === 3 && (
              <FormOrganization activeTab={activeTab} index={3} onNext={handleNext} />
            )}
            {activeTab === 4 && (
              <FormAchievement activeTab={activeTab} index={4} onNext={handleNext} />
            )}
            {activeTab === 5 && (
              <FormContact activeTab={activeTab} index={5} onNext={handleNext} />
            )}
            {activeTab === 6 && <FormSecurity activeTab={activeTab} index={6} />}
          </BoxGiant>
        </StackBody>
      </ContainerMid>
    </BodyBox>
  );
};

export default PageUserEdit;
