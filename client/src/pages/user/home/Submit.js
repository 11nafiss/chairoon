import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  IconButton,
} from "@mui/material";
import { X } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { CLIENT_URL } from "../../../config";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import ScrollBox from "../../../components/shared/ScrollBox";
import GridBox from "../../../components/shared/GridBox";
import FieldInput from "../../../components/shared/FieldInput";
import { CreateActivitiesJob } from "../../../redux/slices/app";
import TextBody from "../../../components/shared/text/TextBody";
import TextTitle from "../../../components/shared/text/TextTitle";
import { LoadingButton } from "@mui/lab";
import FormProvider from "../../../components/shared/hook-form/FormProvider";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: "350px",
    height: "200px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const JobSubmit = ({ handleClose, open, job }) => {
  const { currentUser } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  // const [file, setFile] = useState([]);
  // const inputFile = useRef();

  const defaultValues = {
    applicantId: currentUser._id,
    recruiterId: job.createdBy,
    jobId: job._id,
    applicantResume: `${CLIENT_URL}/ch/${currentUser.username}/resume`,
    dateOfApplication: new Date(),
    answerList: [].map((value) => ({
      questionGiven: "",
      answerGiven: "",
    })),
  };

  const methods = useForm({
    defaultValues,
  });

  const { control, reset, resetField, handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      //   Send API request
      console.log("DATA", data);
      await dispatch(
        CreateActivitiesJob({
          applicantId: data.applicantId,
          recruiterId: data.recruiterId,
          jobId: data.jobId,
          applicantResume: data.applicantResume,
          dateOfApplication: dayjs(data.dateOfApplication),
          answerList: data.answerList
            .filter((value) => value.questionGiven && value.answerGiven)
            .map((value) => ({
              questionGiven: value.questionGiven,
              answerType: value.answerGiven,
            })),
        })
      );

      handleClose();

      Swal.fire({
        title: "Are you sure?",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, Save it!",
      }).then((result) => {
        if (result.isConfirmed) {
          reset();
          resetField(`answerList[]`);
        }
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while updating!",
        icon: "error",
      });

      reset();
    }
  };

  return (
    <BootstrapDialog onClose={handleClose} open={open}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Apply Quest
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <X size={20} weight="bold" />
        </IconButton>
        <DialogContent dividers>
          <ScrollBox>
            <GridBox gap={2}>
              {job.questionList.length > 0 ? (
                job.questionList.map((jobItem, index) => (
                  <Box sx={{ gridColumn: "span 12" }} key={index}>
                    <Controller
                      name={`answerList[${index}].questionGiven`}
                      control={control}
                      render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <>
                          <TextBody sx={{ fontSize: "16px" }}>{`${index + 1}. ${
                            jobItem.questionGiven
                          }`}</TextBody>
                          <input value={value} style={{ display: "none" }} />
                        </>
                      )}
                    />
                    <Controller
                      name={`answerList[${index}].answerGiven`}
                      control={control}
                      render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <>
                          <FieldInput
                            fullWidth
                            value={value}
                            onChange={(item) => {
                              onChange(item);
                            }}
                            error={!!error}
                            type={`${jobItem.answerType}`}
                          />
                          {!!error && (
                            <FormHelperText error sx={{ px: 2, textAlign: "start" }}>
                              required!!
                            </FormHelperText>
                          )}
                        </>
                      )}
                    />
                  </Box>
                ))
              ) : (
                <Box sx={{ gridColumn: "span 12" }}>
                  <TextTitle variant="h3">
                    Are you sure to apply for this job vacancy?
                  </TextTitle>
                </Box>
              )}
            </GridBox>
          </ScrollBox>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            fullWidth
          >
            Save
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </BootstrapDialog>
  );
};

export default JobSubmit;
