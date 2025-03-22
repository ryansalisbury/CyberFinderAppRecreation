import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

import { useController, useFormContext } from "react-hook-form";
interface Props {
  label: string;
  name: string;
}

const sizes = ["Micro", "Small", "Medium", "Large"];

const BusinessSizeInput = ({ label, name }: Props) => {
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return (
    <Stack direction="row" spacing={2} alignItems="center" padding={1}>
      <Typography sx={{ width: 200 }} fontWeight="bold">
        SME Size:
      </Typography>
      <Box display="flex" justifyContent="center" width="80%">
        <RadioGroup row {...field}>
          {sizes.map((s) => {
            return (
              <FormControlLabel
                control={<Radio />}
                key={`${s}-sme-size`}
                value={s}
                label={s}
              />
            );
          })}
        </RadioGroup>
      </Box>
    </Stack>
  );
};

export default BusinessSizeInput;
