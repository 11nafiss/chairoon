import React, { useEffect } from "react";
import StackCol from "../../../components/shared/stack/StackCol";
import TextTitle from "../../../components/shared/text/TextTitle";
import ScrollBox from "../../../components/shared/ScrollBox";
import GridBox from "../../../components/shared/GridBox";
import { AppBar, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FetchApplicantsJob, FetchQuestId } from "../../../redux/slices/app";
import TextBody from "../../../components/shared/text/TextBody";
import StackRow from "../../../components/shared/stack/StackRow";
import StatusBox from "../../../components/shared/StatusBox";
import ButtonIcon from "../../../components/shared/button/ButtonIcon";
import { ReadCvLogo } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const PageActiveJobs = ({ activeTab, pageIndex }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(FetchApplicantsJob({ userId: currentUser._id }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { userApplieds } = useSelector((state) => state.app);

  const handleView = (jobId) => {
    dispatch(FetchQuestId({ questId: jobId }));
    navigate(`/quest/${jobId}/poster`);
  };

  return (
    <div
      role="tabpanel"
      hidden={activeTab !== pageIndex}
      id={`vertical-tabpanel-${pageIndex}`}
      aria-labelledby={`vertical-tab-${pageIndex}`}
      style={{ height: "100%" }}
    >
      {activeTab === pageIndex && (
        <StackCol gap={2}>
          <TextTitle>Job Applied</TextTitle>
          <ScrollBox sx={{ pr: 3 }}>
            <GridBox gap={2}>
              {userApplieds.map((applied, index) => (
                <Box key={index} sx={{ gridColumn: "span 12" }}>
                  <AppBar
                    position="static"
                    sx={{
                      bgcolor: "#f0f0f0",
                      mb: "10px",
                      p: "10px 10px",
                      height: "100%",
                    }}
                  >
                    <StackRow gap={2} sx={{ alignItems: "center", height: "100%" }}>
                      <ButtonIcon onClick={() => handleView(applied.jobId._id)}>
                        <ReadCvLogo size={20} color="#f7bd00" weight="fill" />
                      </ButtonIcon> 
                      <TextBody>{`${applied.jobId.companyName}: ${applied.jobId.jobPosition}`}</TextBody>
                      <Box sx={{ flexGrow: 1 }} />
                      <StackRow
                        gap={2}
                        sx={{ height: "100%", alignItems: "center", width: "auto" }}
                      >
                        {applied.appliedStatus !== "rejected" &&
                          applied.appliedStatus !== "accepted" && (
                            <StatusBox sx={{ bgcolor: "lightblue" }}>
                              <TextBody>{`${applied.recruitStatus}`}</TextBody>
                            </StatusBox>
                          )}
                        {applied.appliedStatus === "rejected" && (
                          <StatusBox sx={{ bgcolor: "orange" }}>
                            <TextBody>{`${applied.appliedStatus}`}</TextBody>
                          </StatusBox>
                        )}
                        {applied.appliedStatus === "accepted" && (
                          <StatusBox sx={{ bgcolor: "lightgreen" }}>
                            <TextBody>{`${applied.appliedStatus}`}</TextBody>
                          </StatusBox>
                        )}
                      </StackRow>
                    </StackRow>
                  </AppBar>
                </Box>
              ))}
            </GridBox>
          </ScrollBox>
        </StackCol>
      )}
    </div>
  );
};

export default PageActiveJobs;
