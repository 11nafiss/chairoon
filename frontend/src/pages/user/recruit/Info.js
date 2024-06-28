import React, { useEffect } from "react";
import StackCol from "../../../components/shared/stack/StackCol";
import TextTitle from "../../../components/shared/text/TextTitle";
import GridBox from "../../../components/shared/GridBox";
import { Box } from "@mui/material";
import ScrollBox from "../../../components/shared/ScrollBox";
import StatBox from "../../../components/compRecruit/StatBox";
import { Briefcase, Users } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { FetchQuestMine, FetchRecruitersJob } from "../../../redux/slices/app";
import { fToNow } from "../../../utils/formatTime";

const PageRecInfo = ({ activeTab, pageIndex }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(FetchQuestMine({ userId: currentUser._id }));
    dispatch(FetchRecruitersJob({ userId: currentUser._id }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { myJobs } = useSelector((state) => state.app);
  const { userApplieds } = useSelector((state) => state.app);
  console.log("🚀 ~ PageRecInfo ~ userApplieds:", userApplieds);

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
          <TextTitle>Requests Info</TextTitle>
          <ScrollBox sx={{ pr: "20px" }}>
            <GridBox gap={2}>
              <Box sx={{ gridColumn: "span 8" }}>
                {myJobs.length > 0 ? (
                  <StatBox
                    title="Total Job Uploaded"
                    value={myJobs.length}
                    increase=""
                    description={`Last updated: ${fToNow(
                      myJobs[myJobs.length - 1].createdAt
                    )}`}
                    icon={<Briefcase size={30} color="#f7bd00" weight="fill" />}
                  />
                ) : (
                  <StatBox
                    title="Total Job Uploaded"
                    value={myJobs.length}
                    increase=""
                    description={`none`}
                    icon={<Briefcase size={30} color="#f7bd00" weight="fill" />}
                  />
                )}
              </Box>
              <Box sx={{ gridColumn: "span 8" }}>
                {userApplieds.length > 0 ? (
                  <StatBox
                    title="Total Job Applicants"
                    value={userApplieds.length}
                    increase=""
                    description={`Last updated: ${fToNow(
                      userApplieds[userApplieds.length - 1].dateOfApplication
                    )}`}
                    icon={<Users size={30} color="#f7bd00" weight="fill" />}
                  />
                ) : (
                  <StatBox
                    title="Total Job Applicants"
                    value={userApplieds.length}
                    increase=""
                    description={`none`}
                    icon={<Users size={30} color="#f7bd00" weight="fill" />}
                  />
                )}
              </Box>
            </GridBox>
          </ScrollBox>
        </StackCol>
      )}
    </div>
  );
};

export default PageRecInfo;
