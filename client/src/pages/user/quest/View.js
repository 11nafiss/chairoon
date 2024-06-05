import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BodyBox from "../../../components/shared/BodyBox";
import ContainerMid from "../../../components/shared/ContainerMid";
import StackBody from "../../../components/shared/stack/StackBody";
import BoxScape from "../../../components/shared/wrapper/BoxScape";
import StackCol from "../../../components/shared/stack/StackCol";
import StackRow from "../../../components/shared/stack/StackRow";
import TextTitle from "../../../components/shared/text/TextTitle";
import { Avatar, Box } from "@mui/material";
import ButtonText from "../../../components/shared/button/ButtonText";
import ScrollBox from "../../../components/shared/ScrollBox";
import GridBox from "../../../components/shared/GridBox";
import TextBody from "../../../components/shared/text/TextBody";
import {
  CalendarBlank,
  CurrencyCircleDollar,
  EnvelopeSimple,
  Globe,
  Laptop,
  MapPin,
} from "@phosphor-icons/react";
import dayjs from "dayjs";
import { fCurrency } from "../../../utils/formatNumber";
import TextThin from "../../../components/shared/text/TextThin";

const PageVacancy = () => {
  const inputRef = useRef(null);

  const { job } = useSelector((state) => state.app);

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
        pdf.save(`${job.jobPosition}_${job.companyName}_poster.pdf`);
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
                <TextTitle>Vacancy Poster</TextTitle>
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
                      src={job?.companyLogo}
                      sx={{
                        width: 100,
                        height: 100,
                      }}
                    />
                  </Box>
                  <Box sx={{ gridColumn: "span 10" }}>
                    <StackCol gap={1} sx={{ justifyContent: "center" }}>
                      <TextTitle variant="h3">{`${job.jobPosition}`}</TextTitle>
                      <TextTitle variant="h4">{`By ${job.companyName}`}</TextTitle>
                    </StackCol>
                  </Box>
                  <Box sx={{ gridColumn: "span 12" }}>
                    <StackRow gap={1}>
                      <TextBody>{`${job?.jobType}`}</TextBody>
                      <TextBody>{` | `}</TextBody>
                      <TextBody>{`Expire on ${dayjs(job?.jobDeadline).format(
                        "ddd, DD MMM YYYY"
                      )}`}</TextBody>
                    </StackRow>
                  </Box>
                  <Box sx={{ gridColumn: "span 12" }}>
                    <StackRow gap={1}>
                      <CurrencyCircleDollar size={20} weight="bold" />
                      <TextBody>{`Rp ${fCurrency(job?.jobSalary)} / ${
                        job?.payPeriods
                      }`}</TextBody>
                    </StackRow>
                  </Box>
                  <Box sx={{ gridColumn: "span 12" }}>
                    <StackRow gap={1}>
                      <Laptop size={20} weight="bold" />
                      <TextBody>{`${job?.workPlacement}`}</TextBody>
                    </StackRow>
                  </Box>
                  <Box sx={{ gridColumn: "span 12" }}>
                    <StackRow gap={1}>
                      <CalendarBlank size={20} weight="bold" />
                      <TextBody>{`${dayjs(job?.jobStartDate).format(
                        "DD MMM YYYY"
                      )} - ${dayjs(job?.jobEndDate).format("DD MMM YYYY")}`}</TextBody>
                    </StackRow>
                  </Box>
                  <Box sx={{ gridColumn: "span 12" }}>
                    <StackRow gap={1}>
                      <EnvelopeSimple size={20} weight="bold" />
                      <TextBody>{`${job?.contactMail}`}</TextBody>
                    </StackRow>
                  </Box>
                  <Box sx={{ gridColumn: "span 12" }}>
                    <StackRow gap={1}>
                      <MapPin size={20} weight="bold" />
                      <TextBody>{`${job?.jobLocation}`}</TextBody>
                    </StackRow>
                  </Box>
                  <Box sx={{ gridColumn: "span 12" }}>
                    <StackRow gap={1}>
                      <Globe size={20} weight="bold" />
                      <Link to={job?.linkWebsite}>{`${job?.linkWebsite}`}</Link>
                    </StackRow>
                  </Box>
                  {job?.jobParticipant !== "" ? (
                    <Box sx={{ gridColumn: "span 12" }}>
                      <StackCol gap={1}>
                        <TextTitle>{`Participant Criteria`}</TextTitle>
                        <TextThin>{`${job?.jobParticipant}`}</TextThin>
                      </StackCol>
                    </Box>
                  ) : null}
                  {job?.jobDescription !== "" ? (
                    <Box sx={{ gridColumn: "span 12" }}>
                      <StackCol gap={1}>
                        <TextTitle>{`Job Description`}</TextTitle>
                        <TextThin>{`${job?.jobDescription}`}</TextThin>
                      </StackCol>
                    </Box>
                  ) : null}
                </GridBox>
              </ScrollBox>
            </StackCol>
          </BoxScape>
        </StackBody>
      </ContainerMid>
    </BodyBox>
  );
};

export default PageVacancy;
