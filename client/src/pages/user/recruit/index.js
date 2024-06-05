import React, { useState } from "react";
import BodyBox from "../../../components/shared/BodyBox";
import ContainerMid from "../../../components/shared/ContainerMid";
import StackBody from "../../../components/shared/stack/StackBody";
import BoxPotrait from "../../../components/shared/wrapper/BoxPotrait";
import BoxGiant from "../../../components/shared/wrapper/BoxGiant";
import StackCol from "../../../components/shared/stack/StackCol";
import TextTitle from "../../../components/shared/text/TextTitle";
import ButtonText from "../../../components/shared/button/ButtonText";
import { Tabs } from "@mui/material";
import TabOption from "../../../components/shared/TabOption";
import PageQuestAdd from "../quest/Add";
import PageRecInfo from "./Info";
import PageRecruitJobs from "./Jobs";
import PageRecruitApc from "./Apc";
import { useNavigate } from "react-router-dom";

const PageRecruit = ({ pageIndex, mode }) => {
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleButton = () => {
    navigate(`/recruit/add`);
    setActiveTab(0);
  };

  return (
    <BodyBox>
      <ContainerMid maxWidth="md">
        <StackBody gap={3}>
          <BoxPotrait sx={{ width: "30%" }}>
            <StackCol gap={2}>
              <TextTitle>My Request</TextTitle>
              <ButtonText onClick={handleButton}>Add Quest</ButtonText>
              <Tabs
                orientation="vertical"
                value={activeTab}
                onChange={handleTabChange}
                sx={{ borderRight: 3, borderColor: "divider" }}
              >
                <TabOption
                  label="Requests Info"
                  value={1}
                  onClick={() => {
                    navigate(`/recruit`);
                  }}
                />
                <TabOption
                  label="Manage Quest"
                  value={2}
                  onClick={() => {
                    navigate(`/recruit/jobs`);
                  }}
                />
                <TabOption
                  label="Applicant Data"
                  value={3}
                  onClick={() => {
                    navigate(`/recruit/applicant`);
                  }}
                />
              </Tabs>
            </StackCol>
          </BoxPotrait>
          <BoxGiant sx={{ width: "70%" }}>
            {activeTab === 0 && (
              <PageQuestAdd activeTab={activeTab} pageIndex={pageIndex} mode={mode} />
            )}
            {activeTab === 1 && (
              <PageRecInfo activeTab={activeTab} pageIndex={pageIndex} />
            )}
            {activeTab === 2 && (
              <PageRecruitJobs
                activeTab={activeTab}
                pageIndex={pageIndex}
                setActiveTab={setActiveTab}
              />
            )}
            {activeTab === 3 && (
              <PageRecruitApc activeTab={activeTab} pageIndex={pageIndex} />
            )}
          </BoxGiant>
        </StackBody>
      </ContainerMid>
    </BodyBox>
  );
};

export default PageRecruit;
