import React from "react";
import StackCol from "../../../components/shared/stack/StackCol";
import TextTitle from "../../../components/shared/text/TextTitle";
import ScrollBox from "../../../components/shared/ScrollBox";
import GridBox from "../../../components/shared/GridBox";
import { Box } from "@mui/material";

const PageActiveRep = ({ activeTab, pageIndex }) => {
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
          <TextTitle>Job Reports</TextTitle>
          <ScrollBox>
            <GridBox gap={2}>
              <Box sx={{ gridColumn: "span 12" }}></Box>
            </GridBox>
          </ScrollBox>
        </StackCol>
      )}
    </div>
  );
};

export default PageActiveRep;
