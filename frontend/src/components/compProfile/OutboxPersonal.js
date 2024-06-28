import React from "react";
import StackCol from "../shared/stack/StackCol";
import TextTitle from "../shared/text/TextTitle";
import StackRow from "../shared/stack/StackRow";
import TextBody from "../shared/text/TextBody";
import { formatDate } from "../../utils/formatDate";
import { Cake, GenderFemale, GenderMale, MapPin, HandsPraying, Phone } from "@phosphor-icons/react";

const SectionPersonal = ({ user }) => {
  console.log(user.birthday);

  return (
    <StackCol gap={2} sx={{ width: "100%" }}>
      <TextTitle>More Info</TextTitle>
      {user.birthday !== undefined ? (
        <StackRow gap={1}>
          <Cake size={20} weight="bold" />
          <TextBody>{formatDate(`${user.birthday}`)}</TextBody>
        </StackRow>
      ) : null}
      {user.gender !== "secret" ? (
        <StackRow gap={1}>
          {user.gender === "female" && <GenderFemale size={20} weight="bold" />}
          {user.gender === "male" && <GenderMale size={20} weight="bold" />}
          <TextBody>{user.gender}</TextBody>
        </StackRow>
      ) : null}
      {user.religion !== null ? (
        <StackRow gap={1}>
          <HandsPraying size={20} weight="bold" />
          <TextBody>{user.religion}</TextBody>
        </StackRow>
      ) : null}
      {user.phoneNumber !== null ? (
        <StackRow gap={1}>
          <Phone size={20} weight="bold" />
          <TextBody>{user.phoneNumber}</TextBody>
        </StackRow>
      ) : null}
      {user.city !== null || user.country !== null ? (
        <StackRow gap={1}>
          <MapPin size={20} weight="bold" />
          <TextBody>{`${user.city}, ${user.country}`}</TextBody>
        </StackRow>
      ) : null}
    </StackCol>
  );
};

export default SectionPersonal;
