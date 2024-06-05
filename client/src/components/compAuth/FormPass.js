import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { NewPassword } from "../../redux/slices/auth";
import FormProvider from "../shared/hook-form/FormProvider";
import { Alert, Button, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import { RHFTextField } from "../shared/hook-form";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import * as Yup from "yup";
import Swal from "sweetalert2";

const FormPass = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [queryParameters] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);

  const VerifyCodeSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    passwordConfirm: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const defaultValues = {
    password: "",
    passwordConfirm: "",
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
      dispatch(NewPassword({ ...data, token: queryParameters.get("token") }));
      reset();
      Swal.fire({
        title: "Good job!",
        text: "Successfully change your password!",
        icon: "success"
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2" color="#fff">
          {"Input your new password"}
        </Typography>
      </Stack>
      <Stack spacing={2} sx={{ marginY: 2 }}>
        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <RHFTextField
          name="passwordConfirm"
          label="Confirm New Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
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
        {"UPDATE"}
      </Button>
    </FormProvider>
  );
};

export default FormPass;
