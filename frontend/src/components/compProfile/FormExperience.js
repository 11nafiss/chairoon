import React, { useEffect, useState } from "react";
import TextTitle from "../shared/text/TextTitle";
import GridBox from "../shared/GridBox";
import StackCol from "../shared/stack/StackCol";
import FormProvider from "./../shared/hook-form/FormProvider";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { UpdateUserProfile } from "../../redux/slices/app";
import { Box, MenuItem } from "@mui/material";
import RHFInputField from "../shared/hook-form/RHFInputField";
import LabelText from "../shared/LabelText";
import StackRow from "./../shared/stack/StackRow";
import { LoadingButton } from "@mui/lab";
import { JOB_TYPE } from "./../../utils/optionData";
import FieldSelect from "../shared/FieldSelect";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Swal from "sweetalert2";
import { Plus, Trash } from "@phosphor-icons/react";
import ButtonPlain from "../shared/button/ButtonPlain";
import DividerLine from "../shared/DividerLine";
import ScrollBox from "../shared/ScrollBox";

const FormExperience = ({ activeTab, index, onNext }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.app);
  const [formBoxes, setFormBoxes] = useState([0]);

  const defaultValues = {
    experiences: (currentUser.experiences || []).map((value) => ({
      companyName: value.companyName,
      positionTitle: value.positionTitle,
      employmentType: value.employmentType,
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
      const updatedExperiences = data.experiences.map((experience) => ({
        companyName: experience.companyName,
        positionTitle: experience.positionTitle,
        employmentType: experience.employmentType,
        location: experience.location,
        startDate: experience.startDate,
        endDate: experience.endDate,
        description: experience.description,
      }));

      await dispatch(UpdateUserProfile({ experiences: updatedExperiences }));

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
          const newExperiences = currentUser?.experiences.filter((_, i) => i !== index);
          dispatch(UpdateUserProfile({ experiences: newExperiences }));

          const filteredBoxes = formBoxes.filter((_, i) => i !== index);
          setFormBoxes(filteredBoxes.length === 0 ? [0] : filteredBoxes);

          Swal.fire("Deleted!", "Your experience has been deleted.", "success");

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
    if (currentUser.experiences && currentUser.experiences.length > 0) {
      setFormBoxes(currentUser.experiences.map((_, index) => index));
    }
  }, [currentUser.experiences]);

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
              <TextTitle>Experience</TextTitle>
              <ButtonPlain onClick={handleAddMore} sx={{ width: "90px" }}>
                <Plus size={15} weight="bold" />
                Add More
              </ButtonPlain>
            </StackRow>
            <ScrollBox>
              {formBoxes.map((index) => (
                <FormSection
                  key={index}
                  index={index}
                  control={control}
                  handleDeleteMore={handleDeleteMore}
                />
              ))}
            </ScrollBox>
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

export default FormExperience;

const FormSection = ({ index, control, handleDeleteMore }) => {
  return (
    <GridBox gap={2}>
      <Box sx={{ gridColumn: "span 6" }}>
        <LabelText>Company Name</LabelText>
        <RHFInputField name={`experiences[${index}].companyName`} />
      </Box>
      <Box sx={{ gridColumn: "span 6" }}>
        <LabelText>Position Title</LabelText>
        <RHFInputField name={`experiences[${index}].positionTitle`} />
      </Box>
      <Box sx={{ gridColumn: "span 6" }}>
        <LabelText>Employment Type</LabelText>
        <Controller
          name={`experiences[${index}].employmentType`}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FieldSelect {...field} fullWidth value={field.value} error={!!error}>
              {JOB_TYPE.map((value, index) => (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              ))}
            </FieldSelect>
          )}
        />
      </Box>
      <Box sx={{ gridColumn: "span 6" }}>
        <LabelText>Location</LabelText>
        <RHFInputField name={`experiences[${index}].location`} />
      </Box>
      <Box sx={{ gridColumn: "span 6" }}>
        <LabelText>Start Date</LabelText>
        <Controller
          name={`experiences[${index}].startDate`}
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
          name={`experiences[${index}].endDate`}
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
          name={`experiences[${index}].description`}
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
        <DividerLine />
      </Box>
    </GridBox>
  );
};
