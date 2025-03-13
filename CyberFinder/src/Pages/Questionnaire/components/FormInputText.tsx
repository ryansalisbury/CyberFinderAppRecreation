import { Stack, TextField } from "@mui/material";
import { Controller, useController, useFormContext } from "react-hook-form";
interface Props {
  label: string;
  name: string;
}
const FormInputText = ({ label, name }: Props) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return (
    <Stack padding={1}>
      <TextField
        {...field}
        label={label}
        error={!!fieldState.error}
        helperText={"Some field helper text"}
      />
    </Stack>
  );
};

export default FormInputText;
