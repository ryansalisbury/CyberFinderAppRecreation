import { Grid2, Typography } from "@mui/material";
import FormNumberInput from "../common/components/FormNumberInput";

interface Props {
  name: string;
  label: string;
}
const EmployeeNumberInput = ({ name, label }: Props) => {
  return (
    <Grid2 container padding={1}>
      <Grid2 size={4}>
        <Typography fontWeight="bold" textAlign={"center"}>
          Number of Employees:
        </Typography>
      </Grid2>
      <Grid2 size={8} justifyContent="flex-start">
        <FormNumberInput label={label} name={name} />
      </Grid2>
    </Grid2>
  );
};

export default EmployeeNumberInput;
