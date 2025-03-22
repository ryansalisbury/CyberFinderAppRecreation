import { Box, Button, Stack, Switch, Typography } from "@mui/material";
import { useState } from "react";

import { useController, useFormContext } from "react-hook-form";
import CyberVictimModal from "./CyberVictimModal";
interface Props {
  name: string;
}

const CyberVictimInput = ({ name }: Props) => {
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
      <Typography sx={{ width: 200 }} fontWeight="bold" textAlign={"center"}>
        Have you peviously been a victim of a Cyber Attack?
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
      <CyberVictimModal isModalOpen={isModalOpen} handleClose={handleClose} />
    </Stack>
  );
};

export default CyberVictimInput;
