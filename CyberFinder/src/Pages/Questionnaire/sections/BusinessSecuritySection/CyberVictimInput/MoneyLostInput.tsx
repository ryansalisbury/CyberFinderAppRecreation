import { Stack, Typography } from "@mui/material";
import FormNumberInput from "../../../common/components/FormNumberInput";

interface Props {
  name: string;
  label: string;
}
const MoneyLostInput = ({ name, label }: Props) => {
  return (
    <Stack direction={"row"} spacing={2} padding={1} alignItems="center">
      <Typography sx={{ width: 200 }} fontWeight="bold">
        Money Lost:
      </Typography>
      <FormNumberInput label={label} name={name} required={false} />
    </Stack>
  );
};

export default MoneyLostInput;
