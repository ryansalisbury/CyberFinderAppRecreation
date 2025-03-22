import { Paper } from "@mui/material";
import {
  PhoneNumberInput,
  PostcodeInput,
  RegionPickerInput,
  UrlInput,
  BusinessNameInput,
} from "./components";

const BusinessAdminSection = () => {
  return (
    <Paper sx={{ padding: 2, margin: 1 }}>
      <BusinessNameInput label="" name="BusinessName" />
      <PhoneNumberInput label="" name="PhoneNumber" />
      <UrlInput label="" name="Url" />
      <RegionPickerInput name="Region" />
      <PostcodeInput label="" name="Postcode" />
    </Paper>
  );
};

export default BusinessAdminSection;
