import React from "react";
import FormProvider from "../shared/hook-form";
import { Alert, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { VerifyEmail } from "../../redux/slices/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import RHFCodes from "../shared/hook-form/RHFCodes";

const FormVerify = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth);
  const VerifyCodeSchema = Yup.object().shape({
    code1: Yup.string().required("Code is required"),
    code2: Yup.string().required("Code is required"),
    code3: Yup.string().required("Code is required"),
    code4: Yup.string().required("Code is required"),
    code5: Yup.string().required("Code is required"),
    code6: Yup.string().required("Code is required"),
  });

  const defaultValues = {
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      //   Send API Request
      dispatch(
        VerifyEmail({
          email,
          otp: `${data.code1}${data.code2}${data.code3}${data.code4}${data.code5}${data.code6}`,
        })
      );
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2" color="#fff">
          {"Input your code OTP"}
        </Typography>
      </Stack>
      <Stack spacing={2} sx={{ marginY: 2 }}>
        <RHFCodes keyName="code" inputs={["code1", "code2", "code3", "code4", "code5", "code6"]} />
      </Stack>
      <Stack alignItems="center" sx={{ mb: 2 }}>
        <Typography
          component="div"
          sx={{ color: "#fff", typography: "caption", textAlign: "center", fontSize: "13px" }}
        >
          Check your email from inbox or spam to input code!
        </Typography>
      </Stack>
      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isLoading}
        sx={{
          bgcolor: "#f7bd00",
          color: "#252525",
          "&:hover": {
            bgcolor: "#CECECF",
            color: "#252525",
          },
        }}
      >
        {"SUBMIT"}
      </LoadingButton>
    </FormProvider>
  );
};

export default FormVerify;
