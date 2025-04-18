import { TextField } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
interface Props {
  label: string;
  name: string;
  required?: boolean;
}
const FormNumberInput = ({ label, name, required }: Props) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: required ?? false },
    defaultValue: 0,
  });

  return (
    <TextField
      {...field}
      label={label}
      error={!!fieldState.error}
      fullWidth
      sx={{
        padding: 1,
        flex: 1,
        minWidth: 200,
        maxWidth: "80%",
      }}
      variant="outlined"
      type="number"
    />
  );
};

export default FormNumberInput;
