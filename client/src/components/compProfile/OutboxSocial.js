import React from "react";
import StackCol from "../shared/stack/StackCol";
import TextTitle from "../shared/text/TextTitle";
import TextBody from "../shared/text/TextBody";
import StackRow from "../shared/stack/StackRow";
import { Box, Link } from "@mui/material";

const SectionSocial = ({ user }) => {
  return (
    <StackCol gap={2} sx={{ width: "100%" }}>
      <TextTitle>Social Link</TextTitle>
      <Box sx={{ overflowY: "scroll", height: "100%", scrollbarWidth: "none" }}>
        <StackCol gap={1}>
          {user.socialmedias.map((value, index) => (
            <StackRow gap={1} key={index}>
              <TextBody>{`${value.mediaName}:`}</TextBody>
              <Link to={value.mediaLink}>
                <TextBody>{value.mediaUsername}</TextBody>
              </Link>
            </StackRow>
          ))}
        </StackCol>
      </Box>
    </StackCol>
  );
};

export default SectionSocial;
