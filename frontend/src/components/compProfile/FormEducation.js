import React, { useEffect, useState } from "react";
import TextTitle from "../shared/text/TextTitle";
import GridBox from "../shared/GridBox";
import StackCol from "../shared/stack/StackCol";
import FormProvider from "./../shared/hook-form/FormProvider";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { UpdateUserProfile } from "../../redux/slices/app";
import { Box, Divider, MenuItem } from "@mui/material";
import RHFInputField from "../shared/hook-form/RHFInputField";
import LabelText from "../shared/LabelText";
import StackRow from "./../shared/stack/StackRow";
import { LoadingButton } from "@mui/lab";
import { SCHOOL_TYPE } from "./../../utils/optionData";
import FieldSelect from "../shared/FieldSelect";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Swal from "sweetalert2";
import { Plus, Trash } from "@phosphor-icons/react";
import ButtonPlain from "../shared/button/ButtonPlain";

const FormEducation = ({ activeTab, index, onNext }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.app);
  const [formBoxes, setFormBoxes] = useState([0]);

  const defaultValues = {
    educations: (currentUser.educations || []).map((value) => ({
      schoolName: value.schoolName,
      degree: value.degree,
      studyField: value.studyField,
      location: value.location,
      startDate: dayjs(value.startDate),
      endDate: dayjs(value.endDate),
      description: value.description,
    })),
  };

  const methods = useForm({
    defaultValues,
  });

  const { control, handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      const updatedEducations = data.educations.map((education) => ({
        schoolName: education.schoolName,
        degree: education.degree,
        studyField: education.studyField,
        location: education.location,
        startDate: education.startDate,
        endDate: education.endDate,
        description: education.description,
      }));

      await dispatch(UpdateUserProfile({ educations: updatedEducations }));

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
          const newEducations = currentUser?.educations.filter((_, i) => i !== index);
          dispatch(UpdateUserProfile({ educations: newEducations }));

          const filteredBoxes = formBoxes.filter((_, i) => i !== index);
          setFormBoxes(filteredBoxes.length === 0 ? [0] : filteredBoxes);

          Swal.fire("Deleted!", "Your education has been deleted.", "success");

          window.location.reload();
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
    if (currentUser.educations && currentUser.educations.length > 0) {
      setFormBoxes(currentUser.educations.map((_, index) => index));
    }
  }, [currentUser.educations]);

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
            <StackRow gap={1}>
              <TextTitle>Education</TextTitle>
              <ButtonPlain onClick={handleAddMore} sx={{ width: "90px" }}>
                <Plus size={15} weight="bold" />
                Add More
              </ButtonPlain>
            </StackRow>
            <Box sx={{ overflowY: "scroll", height: "100%" }}>
              {formBoxes.map((index) => (
                <FormSection
                  key={index}
                  index={index}
                  control={control}
                  handleDeleteMore={handleDeleteMore}
                />
              ))}
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

export default FormEducation;

const FormSection = ({ index, control, handleDeleteMore }) => {
  return (
    <GridBox gap={2}>
      <Box sx={{ gridColumn: "span 6" }}>
        <LabelText>School Name</LabelText>
        <RHFInputField name={`educations[${index}].schoolName`} />
      </Box>
      <Box sx={{ gridColumn: "span 6" }}>
        <LabelText>Degree</LabelText>
        <Controller
          name={`educations[${index}].degree`}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FieldSelect {...field} fullWidth value={field.value} error={!!error}>
              {SCHOOL_TYPE.map((value, index) => (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              ))}
            </FieldSelect>
          )}
        />
      </Box>
      <Box sx={{ gridColumn: "span 6" }}>
        <LabelText>Study Field</LabelText>
        <RHFInputField name={`educations[${index}].studyField`} />
      </Box>
      <Box sx={{ gridColumn: "span 6" }}>
        <LabelText>Location</LabelText>
        <RHFInputField name={`educations[${index}].location`} />
      </Box>
      <Box sx={{ gridColumn: "span 6" }}>
        <LabelText>Start Date</LabelText>
        <Controller
          name={`educations[${index}].startDate`}
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                fullWidth
                name="startDate"
                value={value}
                onChange={(date) => {
                  onChange(date);
                }}
                variant="inline"
                autoOk
                format="MMMM YYYY"
                views={["month", "year"]}
                sx={{
                  width: "100%",
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
      <Box sx={{ gridColumn: "span 6" }}>
        <LabelText>End Date</LabelText>
        <Controller
          name={`educations[${index}].endDate`}
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                fullWidth
                name="endDate"
                value={value}
                onChange={(date) => {
                  onChange(date);
                }}
                variant="inline"
                autoOk
                format="MMMM YYYY"
                views={["month", "year"]}
                sx={{
                  width: "100%",
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
      <Box sx={{ gridColumn: "span 12" }}>
        <LabelText>Description</LabelText>
        <RHFInputField
          name={`educations[${index}].description`}
          type="text"
          multiline
          minRows={3}
          sx={{ height: "100%" }}
        />
      </Box>
      <Box sx={{ gridColumn: "span 12" }}>
        <ButtonPlain
          onClick={() => handleDeleteMore(index)}
          sx={{ width: "100px", color: "red", justifyContent: "start" }}
        >
          <Trash size={15} weight="bold" />
          Delete Data
        </ButtonPlain>
      </Box>
      <Box sx={{ gridColumn: "span 12" }}>
        <Divider
          sx={{ marginBottom: "20px", width: "100%", border: "1px solid #f7bd00" }}
        />
      </Box>
    </GridBox>
  );
};
