import { Box, Grid2, Stack, TextField, Typography } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
interface Props {
  label: string;
  name: string;
}
const UrlInput = ({ label, name }: Props) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: false },
    defaultValue: "",
  });

  return (
    <Grid2 container>
      <Grid2 size={4}>
        <Typography fontWeight="bold">Website: </Typography>
      </Grid2>
      <Grid2 size={8}>
        <TextField
          {...field}
          label={label}
          error={!!fieldState.error}
          fullWidth
          helperText={"Please input a valid URL"}
        />
      </Grid2>
    </Grid2>
  );
};

export default UrlInput;
