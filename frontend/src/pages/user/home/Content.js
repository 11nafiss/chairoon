import React, { useState } from "react";
import BoxPotrait from "../../../components/shared/wrapper/BoxPotrait";
import StackCol from "../../../components/shared/stack/StackCol";
import StackRow from "../../../components/shared/stack/StackRow";
import { Avatar, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { FetchQuestId } from "../../../redux/slices/app";
import TextBody from "../../../components/shared/text/TextBody";
import GridBox from "../../../components/shared/GridBox";
import DividerLine from "../../../components/shared/DividerLine";
import TextTitle from "../../../components/shared/text/TextTitle";
import dayjs from "dayjs";
import {
  ArrowsClockwise,
  BookmarkSimple,
  CalendarBlank,
  ChatCircle,
  CurrencyCircleDollar,
  EnvelopeSimple,
  Heart,
  Laptop,
  MapPin,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import { fCurrency } from "../../../utils/formatNumber";
import ButtonText from "../../../components/shared/button/ButtonText";
import { useNavigate } from "react-router-dom";
import JobSubmit from "./Submit";

const HomeContent = ({ job, createdBy }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleView = () => {
    dispatch(FetchQuestId({ questId: job._id }));
    navigate(`/quest/${job._id}/poster`);
  };

  return (
    <BoxPotrait sx={{ mb: "50px", padding: "0px" }}>
      <StackCol gap={3}>
        <Box sx={{ height: "10%" }}>
          <StackRow gap={2} sx={{ alignItems: "center", height: "100%", px: "20px" }}>
            <Avatar
              alt={createdBy?.username}
              src={createdBy?.avatar}
              sx={{
                width: "40px",
                height: "40px",
                gridColumn: "span 2",
                gridRow: "span 2",
              }}
            />
            <TextBody>{createdBy?.username}</TextBody>
            <Box sx={{ flexGrow: 1 }} />
          </StackRow>
          <DividerLine sx={{ mb: 0 }} />
        </Box>
        <Box sx={{ height: "80%", overflow: "hidden" }}>
          <StackCol
            sx={{
              height: "100%",
              px: "20px",
              overflowY: "scroll",
              scrollbarWidth: "none",
            }}
          >
            <GridBox gap={2}>
              <Box sx={{ gridColumn: "span 12" }}>
                <TextTitle variant="h3">{job?.jobPosition}</TextTitle>
              </Box>
              <Box sx={{ gridColumn: "span 12" }}>
                <StackRow gap={2} sx={{ alignItems: "center" }}>
                  <Avatar
                    src={job?.companyLogo}
                    sx={{
                      width: "40px",
                      height: "40px",
                      gridColumn: "span 2",
                      gridRow: "span 2",
                    }}
                  />
                  <TextTitle>{`By ${job?.companyName}`}</TextTitle>
                </StackRow>
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
                  <TextBody>{`${dayjs(job?.jobStartDate).format("DD MMM YYYY")} - ${dayjs(
                    job?.jobEndDate
                  ).format("DD MMM YYYY")}`}</TextBody>
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
            </GridBox>
            <Box sx={{ flexGrow: 1 }} />
            <StackRow gap={2}>
              <ButtonText onClick={handleView}>
                View
              </ButtonText>
              <ButtonText onClick={handleOpen}>Apply</ButtonText>
              <JobSubmit open={open} handleClose={handleClose} job={job} />
            </StackRow>
          </StackCol>
        </Box>
        <Box sx={{ height: "10%" }}>
          <DividerLine sx={{ mb: 0 }} />
          <StackRow
            gap={4}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              px: "20px",
            }}
          >
            <Heart size={30} weight="bold" />
            <ChatCircle size={30} weight="bold" />
            <ArrowsClockwise size={30} weight="bold" />
            <PaperPlaneTilt size={30} weight="bold" />
            <BookmarkSimple size={30} weight="bold" />
          </StackRow>
        </Box>
      </StackCol>
    </BoxPotrait>
  );
};

export default HomeContent;
