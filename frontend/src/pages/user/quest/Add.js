import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { Box, FormHelperText, MenuItem } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TagsInput from "react-tagsinput";
import Swal from "sweetalert2";
import FormProvider from "../../../components/shared/hook-form/FormProvider";
import StackCol from "../../../components/shared/stack/StackCol";
import TextTitle from "../../../components/shared/text/TextTitle";
import GridBox from "../../../components/shared/GridBox";
import { RHFUploadAvatar } from "../../../components/shared/hook-form/RHFUpload";
import LabelText from "../../../components/shared/LabelText";
import RHFInputField from "../../../components/shared/hook-form/RHFInputField";
import FieldSelect from "../../../components/shared/FieldSelect";
import StackRow from "../../../components/shared/stack/StackRow";
import {
  INPUT_TYPE,
  JOB_TYPE,
  PAY_PERIODS,
  WORK_PLACEMENT,
} from "../../../utils/optionData";
import { CreateRequestsJob } from "../../../redux/slices/app";
import "../../../style.scss";
import ButtonPlain from "../../../components/shared/button/ButtonPlain";
import { Plus, Trash } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";

const PageQuestAdd = ({ activeTab, pageIndex, mode }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  console.log("🚀 ~ FormPersonal ~ file:", file);
  const [formBoxes, setFormBoxes] = useState([]);
  const id = useParams();

  const { job } = useSelector((state) => state.app);
  console.log("🚀 ~ PageQuestAdd ~ job:", job);

  const defaultValues = {
    companyName: mode === "edit" ? job.companyName : "",
    recruitFlow: mode === "edit" ? job.recruitFlow : [],
    jobPosition: mode === "edit" ? job.jobPosition : "",
    jobType: mode === "edit" ? job.jobType : "",
    jobLocation: mode === "edit" ? job.jobLocation : "",
    workPlacement: mode === "edit" ? job.workPlacement : "",
    jobSalary: mode === "edit" ? job.jobSalary : 0,
    payPeriods: mode === "edit" ? job.payPeriods : "",
    jobStartDate: mode === "edit" ? dayjs(job.jobStartDate) : null,
    jobEndDate: mode === "edit" ? dayjs(job.jobEndDate) : null,
    jobDeadline: mode === "edit" ? dayjs(job.jobDeadline) : null,
    jobSkills: mode === "edit" ? job.jobSkills : [],
    jobFacilities: mode === "edit" ? job.jobFacilities : [],
    contactMail: mode === "edit" ? job.contactMail : "",
    linkWebsite: mode === "edit" ? job.linkWebsite : "",
    jobDescription: mode === "edit" ? job.jobDescription : "",
    jobParticipant: mode === "edit" ? job.jobParticipant : "",
    questionList: (mode === "edit" ? job.questionList : []).map((value) => ({
      questionGiven: mode === "edit" ? value.questionGiven : "",
      answerType: mode === "edit" ? value.answerType : null,
    })),
  };

  const methods = useForm({
    defaultValues,
  });

  const { control, reset, setValue, resetField, handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      //   Send API request
      console.log("DATA", data);
      await dispatch(
        CreateRequestsJob({
          companyName: data.companyName,
          recruitFlow: data.recruitFlow,
          jobPosition: data.jobPosition,
          jobType: data.jobType,
          jobLocation: data.jobLocation,
          workPlacement: data.workPlacement,
          jobSalary: data.jobSalary,
          payPeriods: data.payPeriods,
          jobStartDate: dayjs(data.jobStartDate),
          jobEndDate: dayjs(data.jobEndDate),
          jobDeadline: dayjs(data.jobDeadline),
          jobSkills: data.jobSkills,
          jobFacilities: data.jobFacilities,
          contactMail: data.contactMail,
          linkWebsite: data.linkWebsite,
          jobDescription: data.jobDescription,
          jobParticipant: data.jobParticipant,
          questionList:
            data.questionList && data.questionList.length > 0
              ? data.questionList
                  .filter((value) => value.questionGiven && value.answerType)
                  .map((value) => ({
                    questionGiven: value.questionGiven,
                    answerType: value.answerType,
                  }))
              : [],
        })
      );

      Swal.fire({
        title: "Are you sure?",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, Save it!",
      }).then((result) => {
        if (result.isConfirmed) {
          reset();
          resetField(`questionList[]`);
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

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      setFile(file);

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("companyLogo", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleAddMore = () => {
    setFormBoxes((prevBoxes) => [...prevBoxes, prevBoxes.length]);
  };

  const handleDeleteMore = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Reset the specific field in the form
          resetField(`questionList[${index}]`);

          // Filter out the deleted index from formBoxes
          const filteredBoxes = formBoxes.filter((i) => i !== index);

          // Update the state of formBoxes
          setFormBoxes(filteredBoxes.length === 0 ? [] : filteredBoxes);

          Swal.fire("Deleted!", "Your data has been deleted.", "success");
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while deleting!",
            icon: "error",
          });
        }
      }
    });
  };

  useEffect(() => {
    if (id === job._id) {
      if (job.questionList && job.questionList.length > 0) {
        setFormBoxes(job.questionList.map((_, index) => index));
      }
    }
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      role="tabpanel"
      hidden={activeTab !== pageIndex}
      id={`vertical-tabpanel-${pageIndex}`}
      aria-labelledby={`vertical-tab-${pageIndex}`}
      style={{ height: "100%" }}
    >
      {activeTab === pageIndex && (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <StackCol gap={2}>
            <TextTitle>{mode === "edit" ? "Edit" : "Add"} Job</TextTitle>
            <Box sx={{ overflowY: "scroll", height: "100%" }}>
              <GridBox gap={2}>
                <Box sx={{ gridColumn: "span 12" }}>
                  <LabelText>Recruitment Flow</LabelText>
                  <Controller
                    name="recruitFlow"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => {
                      return (
                        <>
                          <TagsInput
                            value={value}
                            onChange={(item) => {
                              onChange(item);
                            }}
                            error={!!error}
                            inputProps={{ placeholder: "Type and click enter" }}
                            onlyUnique
                          />

                          {!!error && (
                            <FormHelperText error sx={{ px: 2, textAlign: "start" }}>
                              required!!
                            </FormHelperText>
                          )}
                        </>
                      );
                    }}
                  />
                </Box>
                <Box sx={{ gridColumn: "span 4", gridRow: "span 2" }}>
                  <RHFUploadAvatar
                    name="companyLogo"
                    maxSize={3145728}
                    onDrop={handleDrop}
                  />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Company Name</LabelText>
                  <RHFInputField name="companyName" />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Job Position</LabelText>
                  <RHFInputField name="jobPosition" />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Job Deadline</LabelText>
                  <Controller
                    name="jobDeadline"
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          fullWidth
                          name="jobDeadline"
                          value={value}
                          onChange={(date) => {
                            onChange(date);
                          }}
                          variant="inline"
                          autoOk
                          format="DD/MM/YYYY"
                          sx={{
                            "& .MuiInputBase-root": {
                              border: "2px solid #858585",
                            },
                            "& .MuiInputBase-input": {
                              padding: "7px 8px",
                              fontSize: "14px",
                            },
                          }}
                        />
                      </LocalizationProvider>
                    )}
                  />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Contact Email</LabelText>
                  <RHFInputField name="contactMail" />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Job Type</LabelText>
                  <Controller
                    name="jobType"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <FieldSelect
                        {...field}
                        fullWidth
                        value={field.value}
                        error={!!error}
                      >
                        {JOB_TYPE.map((value, index) => (
                          <MenuItem key={index} value={value}>
                            {value}
                          </MenuItem>
                        ))}
                      </FieldSelect>
                    )}
                  />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Start Date</LabelText>
                  <Controller
                    name="jobStartDate"
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          fullWidth
                          name="jobStartDate"
                          value={value}
                          onChange={(date) => {
                            onChange(date);
                          }}
                          variant="inline"
                          autoOk
                          format="DD/MM/YYYY"
                          sx={{
                            "& .MuiInputBase-root": {
                              border: "2px solid #858585",
                            },
                            "& .MuiInputBase-input": {
                              padding: "7px 8px",
                              fontSize: "14px",
                            },
                          }}
                        />
                      </LocalizationProvider>
                    )}
                  />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>End Date</LabelText>
                  <Controller
                    name="jobEndDate"
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          fullWidth
                          name="jobEndDate"
                          value={value}
                          onChange={(date) => {
                            onChange(date);
                          }}
                          variant="inline"
                          autoOk
                          format="DD/MM/YYYY"
                          sx={{
                            "& .MuiInputBase-root": {
                              border: "2px solid #858585",
                            },
                            "& .MuiInputBase-input": {
                              padding: "7px 8px",
                              fontSize: "14px",
                            },
                          }}
                        />
                      </LocalizationProvider>
                    )}
                  />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Pay Periods</LabelText>
                  <Controller
                    name="payPeriods"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <FieldSelect
                        {...field}
                        fullWidth
                        value={field.value}
                        error={!!error}
                      >
                        {PAY_PERIODS.map((value, index) => (
                          <MenuItem key={index} value={value}>
                            {value}
                          </MenuItem>
                        ))}
                      </FieldSelect>
                    )}
                  />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Job Salary</LabelText>
                  <RHFInputField name="jobSalary" type="number" />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Link Website</LabelText>
                  <RHFInputField name="linkWebsite" />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Placement Type</LabelText>
                  <Controller
                    name="workPlacement"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <FieldSelect
                        {...field}
                        fullWidth
                        value={field.value}
                        error={!!error}
                      >
                        {WORK_PLACEMENT.map((value, index) => (
                          <MenuItem key={index} value={value}>
                            {value}
                          </MenuItem>
                        ))}
                      </FieldSelect>
                    )}
                  />
                </Box>
                <Box sx={{ gridColumn: "span 8" }}>
                  <LabelText>Job Location</LabelText>
                  <RHFInputField name="jobLocation" />
                </Box>
                <Box sx={{ gridColumn: "span 12" }}>
                  <LabelText>Job Facilities</LabelText>
                  <Controller
                    name="jobFacilities"
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => {
                      return (
                        <TagsInput
                          value={value}
                          onChange={(item) => {
                            onChange(item);
                          }}
                          inputProps={{ placeholder: "Type and click enter" }}
                          onlyUnique
                        />
                      );
                    }}
                  />
                </Box>
                <Box sx={{ gridColumn: "span 12" }}>
                  <LabelText>Requirement Skills</LabelText>
                  <Controller
                    name="jobSkills"
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => {
                      return (
                        <TagsInput
                          value={value}
                          onChange={(item) => {
                            onChange(item);
                          }}
                          inputProps={{ placeholder: "Type and click enter" }}
                          onlyUnique
                        />
                      );
                    }}
                  />
                </Box>
                <Box sx={{ gridColumn: "span 12" }}>
                  <LabelText>Participant Criteria</LabelText>
                  <RHFInputField
                    name="jobParticipant"
                    type="text"
                    multiline
                    minRows={3}
                    sx={{ height: "100%" }}
                  />
                </Box>
                <Box sx={{ gridColumn: "span 12" }}>
                  <LabelText>Job Description</LabelText>
                  <RHFInputField
                    name="jobDescription"
                    type="text"
                    multiline
                    minRows={3}
                    sx={{ height: "100%" }}
                  />
                </Box>
                <Box sx={{ gridColumn: "span 12" }}>
                  <StackRow gap={1}>
                    <TextTitle>Ask Participant</TextTitle>
                    <ButtonPlain onClick={handleAddMore} sx={{ width: "90px" }}>
                      <Plus size={15} weight="bold" />
                      Add More
                    </ButtonPlain>
                  </StackRow>
                </Box>
                <Box sx={{ gridColumn: "span 12" }}>
                  {formBoxes.map((index) => (
                    <FormSection
                      key={index}
                      index={index}
                      control={control}
                      handleDeleteMore={handleDeleteMore}
                    />
                  ))}
                </Box>
              </GridBox>
            </Box>
            <StackRow justifyContent="end" sx={{ mb: "10px" }}>
              <LoadingButton
                color="primary"
                size="large"
                type="submit"
                variant="contained"
                sx={{ height: "40px", width: "150px" }}
              >
                Save
              </LoadingButton>
            </StackRow>
          </StackCol>
        </FormProvider>
      )}
    </div>
  );
};

export default PageQuestAdd;

const FormSection = ({ index, control, handleDeleteMore }) => {
  return (
    <GridBox gap={2}>
      <Box sx={{ gridColumn: "span 2" }}>
        <LabelText>Answer Type</LabelText>
        <Controller
          name={`questionList[${index}].answerType`}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FieldSelect {...field} fullWidth value={field.value} error={!!error}>
              {INPUT_TYPE.map((value, index) => (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              ))}
            </FieldSelect>
          )}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7" }}>
        <LabelText>Your Question</LabelText>
        <RHFInputField name={`questionList[${index}].questionGiven`} />
      </Box>
      <Box sx={{ gridColumn: "span 3" }}>
        <StackRow sx={{ alignItems: "end", height: "100%" }}>
          <ButtonPlain
            onClick={() => handleDeleteMore(index)}
            sx={{ width: "100px", color: "red", justifyContent: "start" }}
          >
            <Trash size={15} weight="bold" />
            Delete Data
          </ButtonPlain>
        </StackRow>
      </Box>
    </GridBox>
  );
};
