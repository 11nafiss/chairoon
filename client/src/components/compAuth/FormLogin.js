import {
  Alert,
  IconButton,
  InputAdornment,
  Link,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { LoginUser, RegisterUser } from "../../redux/slices/auth";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { LoadingButton } from "@mui/lab";
import { Link as RouterLink } from "react-router-dom";
import FormProvider, { RHFTextField } from "../shared/hook-form";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import FieldSelect from "../shared/FieldSelect";
import { RECRUIT_ROLE } from "../../utils/optionData";
import { FetchUserMe } from "../../redux/slices/app";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: Yup.string().required("Password is required"),
});

const defaultValuesLogin = {
  email: "",
  password: "",
};

const registerSchema = Yup.object().shape({
  firstName: Yup.string().required("First name required"),
  lastName: Yup.string().required("Last name required"),
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: Yup.string().required("Password is required"),
  role: Yup.string().required("Role is required"),
});

const defaultValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "user",
};

const FormLogin = ({ setPageType, isLogin, isRegister }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const methods = useForm({
    resolver: yupResolver(loginSchema) || yupResolver(registerSchema),
    defaultValues: defaultValuesLogin || defaultValuesRegister,
  });

  const {
    reset,
    setError,
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      if (isLogin) {
        // submit data to backend
        dispatch(LoginUser(data));
        dispatch(FetchUserMe());
      } else {
        // submit data to backend
        dispatch(RegisterUser(data));
        Swal.fire({
          title: "Good job!",
          text: "Check your email from inbox or spam to verify OTP!",
          icon: "success",
        });
      }
      reset();
    } catch (error) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {!!errors.afterSubmit && (
        <Alert severity="error">{errors.afterSubmit.message}</Alert>
      )}
      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2" color="#fff">
          {" "}
          {isLogin ? "New user? " : "Already have an account? "}{" "}
        </Typography>
        <Link
          variant="subtitle2"
          onClick={() => {
            setPageType(isLogin ? "register" : "login");
          }}
        >
          {isLogin ? "Create an account" : "Login"}
        </Link>
      </Stack>
      <Stack spacing={2} sx={{ marginY: 2 }}>
        {isRegister && (
          <>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <RHFTextField name="firstName" label="First Name" />
              <RHFTextField name="lastName" label="last Name" />
            </Stack>
            <Controller
              name="role"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <FieldSelect
                  {...field}
                  fullWidth
                  value={field.value}
                  defaultValue={0}
                  error={!!error}
                  sx={{
                    bgcolor: "white",
                    "& .MuiInputBase-input": { padding: "15px 20px" },
                    height: "56px",
                    "& .MuiSelect-select": { fontSize: "16px" },
                  }}
                >
                  <MenuItem value={0} disabled sx={{ display: "none" }}>
                    {`Select your Role`}
                  </MenuItem>
                  {RECRUIT_ROLE.map((value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </FieldSelect>
              )}
            />
          </>
        )}
        <RHFTextField type="email" name="email" label="Email" />
        <RHFTextField
          type={showPassword ? "text" : "password"}
          name="password"
          label="Password"
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
      {isLogin ? (
        <Stack alignItems="flex-end" sx={{ mb: 2 }}>
          <Link
            component={RouterLink}
            to="/auth/reset-password"
            variant="body2"
            underline="always"
          >
            Forgot password?
          </Link>
        </Stack>
      ) : (
        <Stack alignItems="flex-end" sx={{ mb: 2 }}>
          <Typography
            component="div"
            sx={{ color: "#fff", typography: "caption", textAlign: "center" }}
          >
            {"By signing up, I agree to "}
            <Link underline="always" color="#fff">
              Terms of Service
            </Link>
            {" and "}
            <Link underline="always" color="#fff">
              Privacy Policy
            </Link>
            .
          </Typography>
        </Stack>
      )}
      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "#f7bd00",
          color: "#252525",
          "&:hover": {
            bgcolor: "#CECECF",
          },
        }}
      >
        {isLogin ? "LOGIN" : "REGISTER"}
      </LoadingButton>
    </FormProvider>
  );
};

export default FormLogin;
