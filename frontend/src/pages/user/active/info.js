import React, { useEffect } from "react";
import StackCol from "../../../components/shared/stack/StackCol";
import TextTitle from "../../../components/shared/text/TextTitle";
import ScrollBox from "../../../components/shared/ScrollBox";
import GridBox from "../../../components/shared/GridBox";
import { Box } from "@mui/material";
import StatBox from "../../../components/compRecruit/StatBox";
import { useDispatch, useSelector } from "react-redux";
import { FetchApplicantsJob } from "../../../redux/slices/app";
import { fToNow } from "../../../utils/formatTime";
import { ReadCvLogo } from "@phosphor-icons/react";

const PageActInfo = ({ activeTab, pageIndex }) => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(FetchApplicantsJob({ userId: currentUser._id }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { userApplieds } = useSelector((state) => state.app);

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
          <TextTitle>Activities Info</TextTitle>
          <ScrollBox>
            <GridBox gap={2}>
              <Box sx={{ gridColumn: "span 8" }}>
                {userApplieds.length > 0 ? (
                  <StatBox
                    title="Total Jobs Registered"
                    value={userApplieds.length}
                    increase=""
                    description={`Last updated: ${fToNow(
                      userApplieds[userApplieds.length - 1].dateOfApplication
                    )}`}
                    icon={<ReadCvLogo size={30} color="#f7bd00" weight="fill" />}
                  />
                ) : (
                  <StatBox
                    title="Total Jobs Registered"
                    value={userApplieds.length}
                    increase=""
                    description={`none`}
                    icon={<ReadCvLogo size={30} color="#f7bd00" weight="fill" />}
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

export default PageActInfo;
