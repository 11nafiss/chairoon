import React, { useEffect, useState } from "react";
import TextTitle from "../shared/text/TextTitle";
import GridBox from "../shared/GridBox";
import StackCol from "../shared/stack/StackCol";
import FormProvider from "./../shared/hook-form/FormProvider";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { UpdateUserProfile } from "../../redux/slices/app";
import { Box, Divider } from "@mui/material";
import RHFInputField from "../shared/hook-form/RHFInputField";
import LabelText from "../shared/LabelText";
import StackRow from "./../shared/stack/StackRow";
import { LoadingButton } from "@mui/lab";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Swal from "sweetalert2";
import { Plus, Trash } from "@phosphor-icons/react";
import ButtonPlain from "../shared/button/ButtonPlain";

const FormAchievement = ({ activeTab, index, onNext }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.app);
  const [formBoxes, setFormBoxes] = useState([0]);

  const defaultValues = {
    achievements: (currentUser.achievements || []).map((value) => ({
      achievementName: value.achievementName,
      publishedBy: value.publishedBy,
      publishedDate: dayjs(value.publishedDate),
      proofLink: value.proofLink,
      description: value.description,
    })),
  };

  const methods = useForm({
    defaultValues,
  });

  const { control, handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      const updatedAchievements = data.achievements.map((achievement) => ({
        achievementName: achievement.achievementName,
        publishedBy: achievement.publishedBy,
        publishedDate: achievement.publishedDate,
        proofLink: achievement.proofLink,
        description: achievement.description,
      }));

      await dispatch(UpdateUserProfile({ achievements: updatedAchievements }));

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
          const newAchievements = currentUser?.achievements.filter((_, i) => i !== index);
          dispatch(UpdateUserProfile({ achievements: newAchievements }));

          const filteredBoxes = formBoxes.filter((_, i) => i !== index);
          setFormBoxes(filteredBoxes.length === 0 ? [0] : filteredBoxes);

          Swal.fire("Deleted!", "Your achievement has been deleted.", "success");

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
    if (currentUser.achievements && currentUser.achievements.length > 0) {
      setFormBoxes(currentUser.achievements.map((_, index) => index));
    }
  }, [currentUser.achievements]);

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
              <TextTitle>Achievement</TextTitle>
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

export default FormAchievement;

const FormSection = ({ index, control, handleDeleteMore }) => {
  return (
    <GridBox gap={2}>
      <Box sx={{ gridColumn: "span 6" }}>
        <LabelText>Achievement Name</LabelText>
        <RHFInputField name={`achievements[${index}].achievementName`} />
      </Box>
      <Box sx={{ gridColumn: "span 6" }}>
        <LabelText>Published By</LabelText>
        <RHFInputField name={`achievements[${index}].publishedBy`} />
      </Box>
      <Box sx={{ gridColumn: "span 6" }}>
        <LabelText>Published Date</LabelText>
        <Controller
          name={`achievements[${index}].publishedDate`}
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                fullWidth
                name="publishedDate"
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
        <LabelText>Proof Link</LabelText>
        <RHFInputField name={`achievements[${index}].proofLink`} />
      </Box>
      <Box sx={{ gridColumn: "span 12" }}>
        <LabelText>Description</LabelText>
        <RHFInputField
          name={`achievements[${index}].description`}
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
