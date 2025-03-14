import {
  FormControlLabel,
  Grid2,
  Radio,
  RadioGroup,
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
    <Grid2 container padding={1}>
      <Grid2 size={4}>
        <Typography fontWeight="bold" textAlign={"center"}>
          SME Size:
        </Typography>
      </Grid2>
      <Grid2 size={8} display="inline-flex">
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
      </Grid2>
    </Grid2>
  );
};

export default BusinessSizeInput;
