import { Grid2, Switch } from "@mui/material";
import StyledMultiSelect from "../../../common/components/StyledMultiSelect";
import FormNumberInput from "../../../common/components/FormNumberInput";
import ActionFraudSection from "./ActionFraudSection";
import IncidentResponseSection from "./IncidentResponseSection";

const organisations: string[] = [
  "ActionFraud",
  "Local ROCU",
  "NCSC",
  "Cyber Essentials",
  "None of the above",
];

const cyberCrimes: string[] = [
  "Phishing",
  "Banking Fraud",
  "Malware",
  "Ransomware",
  "DDoS Attacks",
  "None of the above",
];

const CyberVictimModalContent = () => {
  return (
    <>
      <Grid2 size={12}>
        <StyledMultiSelect
          name="SupportReceived"
          label="Entities who provide cyber support"
          question={"Support Received"}
          values={organisations}
        />
      </Grid2>
      <Grid2 size={12}>
        <StyledMultiSelect
          name="CyberCrimeType"
          label="Type of cyber crime"
          question={"Type of Cyber Crime"}
          values={cyberCrimes}
        />
      </Grid2>
      <Grid2 size={12}>
        <FormNumberInput label="£" name="NumberSOCEmployees" required={false} />
      </Grid2>
      <Grid2 size={12}>
        <ActionFraudSection />
        <IncidentResponseSection />
      </Grid2>
    </>
  );
};

export default CyberVictimModalContent;
