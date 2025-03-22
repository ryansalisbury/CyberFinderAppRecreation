import { Paper } from "@mui/material";
import {
  BusinessSizeInput,
  CyberTopicMultiSelect,
  EmployeeNumberInput,
  PreviousInteractionInput,
} from "./components";
import InternalSOCInput from "./InternalSOCInput/InternalSOCInput";
import CyberVictimInput from "./CyberVictimInput/CyberVictimInput";

const BusinessSecuritySection = () => {
  return (
    <Paper sx={{ padding: 2, margin: 1 }}>
      <PreviousInteractionInput name="PreviousInteraction" />
      <EmployeeNumberInput label="" name="EmployeeNumber" />
      <BusinessSizeInput label="" name="PreviousInteraction" />
      <InternalSOCInput name="InternalSOC" />
      <CyberTopicMultiSelect name="CyberTopicSelection" label="Question10" />
      <CyberVictimInput name="CyberVictim" />
    </Paper>
  );
};

export default BusinessSecuritySection;
