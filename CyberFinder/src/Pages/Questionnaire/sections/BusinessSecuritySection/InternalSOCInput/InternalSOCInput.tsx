import { Box, Button, Grid2, Stack, Switch, Typography } from "@mui/material";
import { useState } from "react";

import { useController, useFormContext } from "react-hook-form";
import InternalSOCModal from "./InternalSOCModal";
interface Props {
  name: string;
}

const InternalSOCInput = ({ name }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
    field.onChange(newValue);
    if (newValue) setModalOpen(true);
  };

  return (
    <Stack direction="row" spacing={2} padding={2} alignItems="center">
      <Typography sx={{ width: 200 }} fontWeight="bold">
        Internal SOC available:
      </Typography>
      <Box width="stretch">
        <Switch {...field} onChange={handleChange} />
        <Button
          sx={{ visibility: field.value ? "visible" : "hidden", marginX: 1 }}
          onClick={handleOpen}
          variant="outlined"
        >
          Edit
        </Button>
      </Box>
      <InternalSOCModal isModalOpen={isModalOpen} handleClose={handleClose} />
    </Stack>
  );
};

export default InternalSOCInput;
