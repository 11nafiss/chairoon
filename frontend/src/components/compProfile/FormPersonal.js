import React, { useCallback, useState } from "react";
import TextTitle from "../shared/text/TextTitle";
import GridBox from "../shared/GridBox";
import StackCol from "../shared/stack/StackCol";
import FormProvider from "./../shared/hook-form/FormProvider";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { UpdateUserProfile } from "../../redux/slices/app";
import { RHFUploadAvatar } from "./../shared/hook-form/RHFUpload";
import { Box, MenuItem } from "@mui/material";
import RHFInputField from "../shared/hook-form/RHFInputField";
import LabelText from "../shared/LabelText";
import StackRow from "./../shared/stack/StackRow";
import { LoadingButton } from "@mui/lab";
import { USER_GENDER, USER_RELIGION } from "./../../utils/optionData";
import FieldSelect from "../shared/FieldSelect";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TagsInput from "react-tagsinput";
import "../../style.scss";
import Swal from "sweetalert2";

const FormPersonal = ({ activeTab, index, onNext }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  console.log("🚀 ~ FormPersonal ~ file:", file);
  const { currentUser } = useSelector((state) => state.app);

  const defaultValues = {
    firstName: currentUser?.firstName,
    lastName: currentUser?.lastName,
    username: currentUser?.username,
    headline: currentUser?.headline,
    gender: currentUser?.gender,
    religion: currentUser?.religion,
    birthday: dayjs(currentUser?.birthday),
    city: currentUser?.city,
    country: currentUser?.country,
    profileWeb: (currentUser.profileWeb || []).map((value) => ({
      linkName: value.linkName,
      linkUrl: value.linkUrl,
    })),
    skills: currentUser?.skills,
    about: currentUser?.about,
  };

  const methods = useForm({
    defaultValues,
  });

  const { control, setValue, handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      //   Send API request
      console.log("DATA", data);
      await dispatch(
        UpdateUserProfile({
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username,
          headline: data.headline,
          gender: data.gender,
          religion: data.religion,
          birthday: data.birthday,
          city: data.city,
          country: data.country,
          profileWeb: [
            {
              linkName: data.linkName,
              linkUrl: data.linkUrl,
            },
          ],
          skills: data.skills,
          about: data.about,
        })
      );

      Swal.fire({
        title: "Are you sure?",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, Save it!",
      }).then((result) => {
        if (result.isConfirmed) {
          onNext();
        }
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while updating!",
        icon: "error",
      });
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
        setValue("avatar", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  return (
    <div
      role="tabpanel"
      hidden={activeTab !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ height: "100%" }}
    >
      {activeTab === index && (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <StackCol gap={2}>
            <TextTitle>Personal Info</TextTitle>
            <Box sx={{ overflowY: "scroll", height: "100%" }}>
              <GridBox gap={2}>
                <Box sx={{ gridColumn: "span 4", gridRow: "span 2" }}>
                  <RHFUploadAvatar name="avatar" maxSize={3145728} onDrop={handleDrop} />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>First Name</LabelText>
                  <RHFInputField name="firstName" />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Last Name</LabelText>
                  <RHFInputField name="lastName" />
                </Box>
                <Box sx={{ gridColumn: "span 8" }}>
                  <LabelText>Headline</LabelText>
                  <RHFInputField name="headline" />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Username</LabelText>
                  <RHFInputField name="username" />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Gender</LabelText>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <FieldSelect
                        {...field}
                        fullWidth
                        value={field.value}
                        error={!!error}
                      >
                        {USER_GENDER.map((value, index) => (
                          <MenuItem key={index} value={value}>
                            {value}
                          </MenuItem>
                        ))}
                      </FieldSelect>
                    )}
                  />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Religion</LabelText>
                  <Controller
                    name="religion"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <FieldSelect
                        {...field}
                        fullWidth
                        value={field.value}
                        error={!!error}
                      >
                        {USER_RELIGION.map((value, index) => (
                          <MenuItem key={index} value={value}>
                            {value}
                          </MenuItem>
                        ))}
                      </FieldSelect>
                    )}
                  />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Birthday</LabelText>
                  <Controller
                    name="birthday"
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          fullWidth
                          name="birthday"
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
                  <LabelText>City</LabelText>
                  <RHFInputField name="city" />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Country</LabelText>
                  <RHFInputField name="country" />
                </Box>
                <Box sx={{ gridColumn: "span 4" }}>
                  <LabelText>Link Name</LabelText>
                  <RHFInputField name="linkName" />
                </Box>
                <Box sx={{ gridColumn: "span 8" }}>
                  <LabelText>Link Url</LabelText>
                  <RHFInputField name="linkUrl" />
                </Box>
                <Box sx={{ gridColumn: "span 12" }}>
                  <LabelText>Your Skills</LabelText>
                  <Controller
                    name="skills"
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
                  <LabelText>Your Description</LabelText>
                  <RHFInputField name="about" type="text" multiline minRows={3} />
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

export default FormPersonal;
