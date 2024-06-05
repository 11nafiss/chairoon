import React from "react";
import FormProvider from "../shared/hook-form/FormProvider";
import { Alert, Button, Stack, Typography } from "@mui/material";
import { RHFTextField } from "../shared/hook-form";
import { ForgotPassword } from "../../redux/slices/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

const FormReset = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
  });

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: { email: "" },
  });

  const {
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      //   Send API Request
      dispatch(ForgotPassword(data));
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {!!errors.afterSubmit && (
        <Alert severity="error">{errors.afterSubmit.message}</Alert>
      )}
      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2" color="#fff">
          {"Input your Email Account"}
        </Typography>
      </Stack>
      <Stack spacing={2} sx={{ marginY: 2 }}>
        <RHFTextField type="email" name="email" label="Email" />
      </Stack>
      <Stack alignItems="center" sx={{ mb: 2 }}>
        <Typography
          component="div"
          sx={{ color: "#fff", typography: "caption", textAlign: "center", fontSize: "13px" }}
        >
          Check your email from inbox or spam after you submit!
        </Typography>
      </Stack>
      <Button
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
      </Button>
    </FormProvider>
  );
};

export default FormReset;
