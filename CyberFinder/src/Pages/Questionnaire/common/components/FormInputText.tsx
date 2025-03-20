import { InputAdornment, TextField } from "@mui/material";
import { ReactNode } from "react";
import { useController, useFormContext } from "react-hook-form";
interface Props {
  label: string;
  name: string;
  icon?: ReactNode;
  helperText?: string;
}
const FormInputText = ({ label, name, icon, helperText }: Props) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return (
    <TextField
      {...field}
      label={label}
      error={!!fieldState.error}
      fullWidth
      helperText={helperText}
      sx={{ padding: 1 }}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment
              sx={{ visibility: icon ? "visible" : "hidden" }}
              position="end"
            >
              {icon}
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default FormInputText;
