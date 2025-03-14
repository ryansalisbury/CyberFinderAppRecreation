import { Grid2, Typography } from "@mui/material";
import FormInputText from "../common/components/FormInputText";
interface Props {
  label: string;
  name: string;
}
const BusinessNameInput = ({ label, name }: Props) => {
  return (
    <Grid2 container>
      <Grid2 size={4}>
        <Typography fontWeight="bold" textAlign={"center"}>
          Business Name
        </Typography>
      </Grid2>
      <Grid2 size={8}>
        <FormInputText label={label} name={name} />
      </Grid2>
    </Grid2>
  );
};

export default BusinessNameInput;
