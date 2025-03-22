import { Box, Stack, Switch, Typography } from "@mui/material";

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
    <Stack direction="row" spacing={2} padding={1} alignItems="center">
      <Typography sx={{ width: 200 }} fontWeight="bold">
        Have you had a cyber consultation from ROCU before?
      </Typography>
      <Box width="stretch">
        <Switch {...field} />
      </Box>
    </Stack>
  );
};

export default PreviousInteractionInput;
