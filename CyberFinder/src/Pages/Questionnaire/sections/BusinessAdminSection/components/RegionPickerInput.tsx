import {
  Alert,
  CircularProgress,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
import useGetRegions from "../../../hooks/useGetRegion/useGetRegions";
import FormInputText from "../../../common/components/FormInputText";
interface Props {
  name: string;
}

const RegionPickerInput = ({ name }: Props) => {
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
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography sx={{ width: 200 }} fontWeight="bold" textAlign={"center"}>
          Region:
        </Typography>
        <Alert severity="error">Failed to load regions</Alert>
        <FormInputText label="" name={name} />
      </Stack>
    );

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography sx={{ width: 200 }} fontWeight="bold" textAlign={"center"}>
        Region:
      </Typography>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Select
          {...field}
          error={!!fieldState.error}
          defaultValue=""
          fullWidth
          label="Select Region"
          sx={{ minWidth: 200, maxWidth: 500 }}
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
    </Stack>
  );
};

export default RegionPickerInput;
