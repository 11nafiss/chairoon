import PropTypes from "prop-types";
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import FieldInput from "../FieldInput";

// ----------------------------------------------------------------------

RHFInputField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFInputField({ name, helperText, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FieldInput
          {...field}
          fullWidth
          value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
  );
}
