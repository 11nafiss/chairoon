import React from "react";
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
import { RECRUIT_ROLE } from "./../../utils/optionData";
import FieldSelect from "../shared/FieldSelect";
import Swal from "sweetalert2";
import ButtonText from "../shared/button/ButtonText";
import ButtonPlain from "../shared/button/ButtonPlain";
import { CheckCircle } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { updateRegisterEmail } from "./../../redux/slices/auth";

const FormSecurity = ({ activeTab, index }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.app);
  const navigate = useNavigate();

  const defaultValues = {
    email: currentUser?.email,
    phoneNumber: currentUser?.phoneNumber,
    role: currentUser?.role,
  };

  const methods = useForm({
    defaultValues,
  });

  const { control, handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      //   Send API request
      console.log("DATA", data);
      await dispatch(
        UpdateUserProfile({
          email: data.email,
          phoneNumber: data.phoneNumber,
          role: data.role,
        })
      );

      Swal.fire({
        title: "Are you sure?",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, Save it!",
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

  const handleVerify = () => {
    dispatch(updateRegisterEmail({ email: currentUser.email }));
    navigate(`/auth/verify`);
  };

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
            <TextTitle>Security Info</TextTitle>
            <Box sx={{ overflowY: "scroll", height: "100%" }}>
              <GridBox gap={2}>
                <Box sx={{ gridColumn: "span 7" }}>
                  <LabelText>Role</LabelText>
                  <Controller
                    name="role"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <FieldSelect
                        {...field}
                        fullWidth
                        value={field.value}
                        error={!!error}
                      >
                        {RECRUIT_ROLE.map((value, index) => (
                          <MenuItem key={index} value={value}>
                            {value}
                          </MenuItem>
                        ))}
                      </FieldSelect>
                    )}
                  />
                </Box>
                <Box sx={{ gridColumn: "span 7" }}>
                  <LabelText>Phone Number</LabelText>
                  <RHFInputField name="phoneNumber" />
                </Box>
                <Box sx={{ gridColumn: "span 7" }}>
                  <LabelText>Email Address</LabelText>
                  <RHFInputField name="email" />
                </Box>
                <Box sx={{ gridColumn: "span 7" }}>
                  <ButtonPlain
                    onClick={handleVerify}
                    sx={{ color: "blue", width: "150px" }}
                  >
                    <CheckCircle size={14} weight="bold" />
                    Verify This Account
                  </ButtonPlain>
                </Box>
                <Box sx={{ gridColumn: "span 7" }}>
                  <LabelText>Password</LabelText>
                  <ButtonText onClick={() => navigate(`/auth/reset-password`)}>
                    Change Password
                  </ButtonText>
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

export default FormSecurity;
