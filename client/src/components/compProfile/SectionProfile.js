import React from "react";
import StackCol from "../shared/stack/StackCol";
import TextTitle from "../shared/text/TextTitle";
import TextThin from "../shared/text/TextThin";
import GreyBox from "../shared/GreyBox";

const SectionProfile = ({ user, activeTab, index }) => {
  return (
    <div role="tabpanel" hidden={activeTab !== index}>
      {activeTab === index && (
        <StackCol gap={3}>
          {user.about !== undefined && (
            <GreyBox>
              <StackCol gap={1}>
                <TextTitle>About Me</TextTitle>
                <TextThin>{user.about}</TextThin>
              </StackCol>
            </GreyBox>
          )}
        </StackCol>
      )}
    </div>
  );
};

export default SectionProfile;
