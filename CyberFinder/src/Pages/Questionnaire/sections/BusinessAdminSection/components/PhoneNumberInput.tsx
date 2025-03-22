import { Stack, Typography } from "@mui/material";
import FormInputText from "../../../common/components/FormInputText";
interface Props {
  label: string;
  name: string;
}
const PhoneNumberInput = ({ label, name }: Props) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography sx={{ width: 200 }} fontWeight="bold">
        Phone Number:
      </Typography>
      <FormInputText label={label} name={name} />
    </Stack>
  );
};

export default PhoneNumberInput;
