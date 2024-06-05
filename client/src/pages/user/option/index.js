import React from "react";
import BodyBox from "../../../components/shared/BodyBox";
import ContainerMid from "../../../components/shared/ContainerMid";
import StackBody from "../../../components/shared/stack/StackBody";
import BoxPotrait from "../../../components/shared/wrapper/BoxPotrait";
import BoxGiant from "../../../components/shared/wrapper/BoxGiant";

const PageOption = () => {
  return (
    <BodyBox>
      <ContainerMid maxWidth="md">
        <StackBody gap={3}>
          <BoxPotrait sx={{ width: "30%" }}></BoxPotrait>
          <BoxGiant sx={{ width: "70%" }}></BoxGiant>
        </StackBody>
      </ContainerMid>
    </BodyBox>
  );
};

export default PageOption;
