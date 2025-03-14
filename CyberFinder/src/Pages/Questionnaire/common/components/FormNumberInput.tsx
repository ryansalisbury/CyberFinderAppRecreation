import { TextField } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
interface Props {
  label: string;
  name: string;
}
const FormNumberInput = ({ label, name }: Props) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: 0,
  });

  return (
    <TextField
      {...field}
      label={label}
      error={!!fieldState.error}
      fullWidth
      type="number"
      helperText={"Some field helper text"}
    />
  );
};

export default FormNumberInput;
