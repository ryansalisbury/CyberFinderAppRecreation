import {
  Alert,
  CircularProgress,
  Grid2,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import useGetRegions from "../hooks/useGetRegions";
import { useController, useFormContext } from "react-hook-form";
interface Props {
  label: string;
  name: string;
}

const RegionPickerInput = ({ label, name }: Props) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });
  const { data: regions, isError, isLoading } = useGetRegions();

  if (isError)
    return (
      <Grid2 container justifyContent="flex-end" padding={1}>
        <Grid2 size={4}>
          <Typography fontWeight="bold" textAlign={"center"}>
            Region:
          </Typography>
        </Grid2>
        <Grid2 size={8} padding={2}>
          <Alert severity="error">Failed to load regions</Alert>
        </Grid2>
      </Grid2>
    );

  return (
    <Grid2 container padding={1}>
      <Grid2 size={4}>
        <Typography fontWeight="bold" textAlign={"center"}>
          Region:
        </Typography>
      </Grid2>
      <Grid2 size={8} justifyContent="flex-start">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Select
            {...field}
            error={!!fieldState.error}
            defaultValue=""
            fullWidth
            label="Select Region"
          >
            {regions?.map((region) => {
              return (
                <MenuItem key={region.name} value={region.name}>
                  {region.name}
                </MenuItem>
              );
            })}
          </Select>
        )}
      </Grid2>
    </Grid2>
  );
};

export default RegionPickerInput;
