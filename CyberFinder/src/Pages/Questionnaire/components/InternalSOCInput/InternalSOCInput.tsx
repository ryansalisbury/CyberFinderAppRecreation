import { Button, Grid2, Switch, Typography } from "@mui/material";
import { useState } from "react";

import { useController, useFormContext } from "react-hook-form";
import InternalSOCModal from "./InternalSOCModal";
interface Props {
  label: string;
  name: string;
}

const InternalSOCInput = ({ label, name }: Props) => {
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
    <>
      <Grid2 container padding={1}>
        <Grid2 size={4}>
          <Typography fontWeight="bold" textAlign={"center"}>
            Internal SOC available:
          </Typography>
        </Grid2>
        <Grid2 size={8} justifyContent="flex-start">
          <Switch {...field} onChange={handleChange} />
          <Button
            sx={{ visibility: field.value ? "visible" : "hidden", marginX: 1 }}
            onClick={handleOpen}
            variant="outlined"
          >
            Edit
          </Button>
        </Grid2>
      </Grid2>
      <InternalSOCModal isModalOpen={isModalOpen} handleClose={handleClose} />
    </>
  );
};

export default InternalSOCInput;
