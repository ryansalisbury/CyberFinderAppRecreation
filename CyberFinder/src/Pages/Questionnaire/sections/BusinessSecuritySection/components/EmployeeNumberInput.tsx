import { Stack, Typography } from "@mui/material";
import FormNumberInput from "../../../common/components/FormNumberInput";

interface Props {
  name: string;
  label: string;
}
const EmployeeNumberInput = ({ name, label }: Props) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography sx={{ width: 200 }} fontWeight="bold">
        Number of Employees:
      </Typography>
      <FormNumberInput label={label} name={name} />
    </Stack>
  );
};

export default EmployeeNumberInput;
