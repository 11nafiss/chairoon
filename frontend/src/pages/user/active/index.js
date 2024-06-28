import React, { useState } from "react";
import BodyBox from "../../../components/shared/BodyBox";
import ContainerMid from "../../../components/shared/ContainerMid";
import StackBody from "../../../components/shared/stack/StackBody";
import BoxPotrait from "../../../components/shared/wrapper/BoxPotrait";
import BoxGiant from "../../../components/shared/wrapper/BoxGiant";
import { useNavigate } from "react-router-dom";
import StackCol from "../../../components/shared/stack/StackCol";
import TextTitle from "../../../components/shared/text/TextTitle";
import ButtonText from "../../../components/shared/button/ButtonText";
import { Tabs } from "@mui/material";
import TabOption from "../../../components/shared/TabOption";
import PageActInfo from "./info";
import PageActiveJobs from "./Jobs";
import PageActiveRep from "./Rep";

const PageActive = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <BodyBox>
      <ContainerMid maxWidth="md">
        <StackBody gap={3}>
          <BoxPotrait sx={{ width: "30%" }}>
            <StackCol gap={2}>
              <TextTitle>My Activities</TextTitle>
              <ButtonText onClick={() => navigate(`/home`)}>Find Quest</ButtonText>
              <Tabs
                orientation="vertical"
                value={activeTab}
                onChange={handleTabChange}
                sx={{ borderRight: 3, borderColor: "divider" }}
              >
                <TabOption label="Activities Info" value={0} />
                <TabOption label="Job Applied" />
                {/* <TabOption label="Job Reports" /> */}
              </Tabs>
            </StackCol>
          </BoxPotrait>
          <BoxGiant sx={{ width: "70%" }}>
            {activeTab === 0 && <PageActInfo activeTab={activeTab} pageIndex={0} />}
            {activeTab === 1 && <PageActiveJobs activeTab={activeTab} pageIndex={1} />}
            {activeTab === 2 && <PageActiveRep activeTab={activeTab} pageIndex={2} />}
          </BoxGiant>
        </StackBody>
      </ContainerMid>
    </BodyBox>
  );
};

export default PageActive;
