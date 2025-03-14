import { TextField } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
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
    <TextField
      {...field}
      label={label}
      error={!!fieldState.error}
      fullWidth
      helperText={"Some field helper text"}
    />
  );
};

export default FormInputText;
