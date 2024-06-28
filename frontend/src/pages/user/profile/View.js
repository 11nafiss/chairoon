import React, { useEffect, useRef } from "react";
import BodyBox from "../../../components/shared/BodyBox";
import ContainerMid from "../../../components/shared/ContainerMid";
import StackBody from "../../../components/shared/stack/StackBody";
import BoxScape from "../../../components/shared/wrapper/BoxScape";
import TextTitle from "../../../components/shared/text/TextTitle";
import StackCol from "../../../components/shared/stack/StackCol";
import StackRow from "../../../components/shared/stack/StackRow";
import { Avatar, Box } from "@mui/material";
import ButtonText from "../../../components/shared/button/ButtonText";
import ScrollBox from "../../../components/shared/ScrollBox";
import GridBox from "../../../components/shared/GridBox";
import { Link, useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useDispatch, useSelector } from "react-redux";
import { FetchUserProfile } from "../../../redux/slices/app";
import TextBody from "../../../components/shared/text/TextBody";
import dayjs from "dayjs";
import DividerLine from "../../../components/shared/DividerLine";
import { CLIENT_URL } from "../../../config";
import TextThin from "../../../components/shared/text/TextThin";

const PageResume = () => {
  const inputRef = useRef(null);
  const { username } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchUserProfile(username));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { user } = useSelector((state) => state.app);

  const printDocument = () => {
    html2canvas(inputRef.current, { useCORS: true }).then((canvas) => {
      let img = new Image();
      img.src = canvas.toDataURL("image/png");
      img.onload = () => {
        const pdf = new jsPDF("p", "mm", "a4", true);
        const imgProps = pdf.getImageProperties(img);
        let pdfWidth = pdf.internal.pageSize.getWidth();
        let imgHeight = pdf.internal.pageSize.getHeight();
        let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
        if (pdfHeight >= imgHeight) {
          pdf.addPage();
          pdfHeight = 0; // Restart height position
          pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
        }
        pdf.save(`${user.username}_resume.pdf`);
      };
    });
  };

  return (
    <BodyBox>
      <ContainerMid maxWidth="md">
        <StackBody gap={3}>
          <BoxScape>
            <StackCol gap={2}>
              <StackRow sx={{ alignItems: "center" }}>
                <TextTitle>Profile Resume</TextTitle>
                <Box sx={{ flexGrow: 1 }} />
                <ButtonText onClick={printDocument} sx={{ width: "100px" }}>
                  Download
                </ButtonText>
              </StackRow>
              <ScrollBox
                sx={{
                  borderWidth: "2px 0px 0px 0px",
                  borderStyle: "solid",
                  borderColor: "#252525",
                }}
              >
                <GridBox id="divToPrint" ref={inputRef} gap={2} sx={{ padding: "30px" }}>
                  <Box sx={{ gridColumn: "span 2", gridRow: "span 1" }}>
                    <Avatar
                      alt={user?.username}
                      src={user?.avatar}
                      sx={{
                        width: 100,
                        height: 100,
                      }}
                    />
                  </Box>
                  <Box sx={{ gridColumn: "span 10" }}>
                    <StackCol gap={1} sx={{ justifyContent: "center" }}>
                      <TextTitle>{`${user.firstName} ${user.lastName}`}</TextTitle>
                      <StackRow gap={1} sx={{ alignItems: "center" }}>
                        <TextThin
                          sx={{
                            "&:first-letter": {
                              textTransform: "lowercase",
                            },
                          }}
                        >{`${user.email}`}</TextThin>
                        {user.phoneNumber !== undefined && (
                          <>
                            <TextBody>{"|"}</TextBody>
                            <TextThin>{`${user.phoneNumber}`}</TextThin>
                          </>
                        )}
                        {user.socialmedias.length !== 0 && (
                          <>
                            <TextBody>{"|"}</TextBody>
                            <TextThin>{`Chairoon: `}</TextThin>
                            <Link to={`${CLIENT_URL}/ch/${user.username}`}>
                              <TextThin
                                sx={{
                                  "&:first-letter": {
                                    textTransform: "lowercase",
                                  },
                                }}
                              >{`@${user.username}`}</TextThin>
                            </Link>
                          </>
                        )}
                        {user.profileWeb.length !== 0 && (
                          <>
                            <TextBody>{"|"}</TextBody>
                            <TextThin>{`Web: `}</TextThin>
                            {user.profileWeb.map((value) => (
                              <Link to={`${value.linkUrl}`}>
                                <TextThin>{`${value.linkName}`}</TextThin>
                              </Link>
                            ))}
                          </>
                        )}
                      </StackRow>
                      <StackRow gap={1} sx={{ alignItems: "center" }}>
                        {user.city !== undefined && (
                          <>
                            <TextThin>{`${user.city}, `}</TextThin>
                          </>
                        )}
                        {user.country !== undefined && (
                          <>
                            <TextThin>{`${user.country}`}</TextThin>
                          </>
                        )}
                        {user.birthday !== undefined && (
                          <>
                            <TextBody>{"|"}</TextBody>
                            <TextThin>{`${dayjs(user.birthday).format(
                              "ddd, DD MMM YYYY"
                            )}`}</TextThin>
                          </>
                        )}
                        {user.gender !== undefined && user.gender !== "secret" && (
                          <>
                            <TextBody>{"|"}</TextBody>
                            <TextThin>{`${user.gender}`}</TextThin>
                          </>
                        )}
                        {user.religion !== undefined && user.religion !== "secret" && (
                          <>
                            <TextBody>{"|"}</TextBody>
                            <TextThin>{`${user.religion}`}</TextThin>
                          </>
                        )}
                      </StackRow>
                    </StackCol>
                  </Box>
                  <Box sx={{ gridColumn: "span 12" }}>
                    <DividerLine sx={{ mb: "0px" }} />
                  </Box>
                  <Box sx={{ gridColumn: "span 12" }}>
                    <StackCol gap={1}>
                      <TextTitle>About Me</TextTitle>
                      <Box sx={{ ml: "20px" }}>
                        <TextThin>{user.about}</TextThin>
                      </Box>
                    </StackCol>
                  </Box>
                </GridBox>
              </ScrollBox>
            </StackCol>
          </BoxScape>
        </StackBody>
      </ContainerMid>
    </BodyBox>
  );
};

export default PageResume;
