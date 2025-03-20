import { Grid2, Switch, Typography } from "@mui/material";

import { useController, useFormContext } from "react-hook-form";
interface Props {
  name: string;
}

const PreviousInteractionInput = ({ name }: Props) => {
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
          Have you had a cyber consultation from ROCU before?
        </Typography>
      </Grid2>
      <Grid2 size={8} justifyContent="flex-start">
        <Switch {...field} />
      </Grid2>
    </Grid2>
  );
};

export default PreviousInteractionInput;
