import React, { useEffect } from "react";
import ContainerMid from "../../../components/shared/ContainerMid";
import BoxSmall from "../../../components/shared/wrapper/BoxSmall";
import BoxPotrait from "../../../components/shared/wrapper/BoxPotrait";
import ScrollContent from "../../../components/shared/ScrollContent";
import BodyBox from "../../../components/shared/BodyBox";
import StackBody from "../../../components/shared/stack/StackBody";
import StackCol from "../../../components/shared/stack/StackCol";
import { useDispatch, useSelector } from "react-redux";
import { FetchQuestAll } from "../../../redux/slices/app";
import HomeContent from "./Content";
import TextTitle from "../../../components/shared/text/TextTitle";

const PageHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchQuestAll());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { allJobs } = useSelector((state) => state.app);
  console.log("🚀 ~ PageHome ~ allJobs:", allJobs);

  return (
    <BodyBox>
      <ContainerMid maxWidth="md">
        <StackBody gap={3}>
          <StackCol gap={3} sx={{ width: "230px" }}>
            <BoxSmall></BoxSmall>
            <BoxSmall></BoxSmall>
          </StackCol>
          <BoxPotrait
            sx={{ backgroundColor: "transparent", padding: "0", overflow: "hidden" }}
          >
            {allJobs.length > 0 ? (
              <ScrollContent>
                {allJobs
                  .slice()
                  .reverse()
                  .map((job, index) => (
                    <HomeContent key={index} job={job} createdBy={job.createdBy} />
                  ))}
              </ScrollContent>
            ) : (
              <BoxPotrait>
                <StackCol sx={{ alignItems: "center", justifyContent: "center" }}>
                  <TextTitle>No one has created the job vacancy yet</TextTitle>
                </StackCol>
              </BoxPotrait>
            )}
          </BoxPotrait>
          <StackCol gap={3} sx={{ width: "230px" }}>
            <BoxSmall></BoxSmall>
            <BoxSmall></BoxSmall>
          </StackCol>
        </StackBody>
      </ContainerMid>
    </BodyBox>
  );
};

export default PageHome;
