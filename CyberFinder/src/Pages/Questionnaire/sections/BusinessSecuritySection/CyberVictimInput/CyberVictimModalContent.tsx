import StyledMultiSelect from "../../../common/components/StyledMultiSelect";
import ActionFraudSection from "./ActionFraudSection/ActionFraudSection";
import IncidentResponseSection from "./IncidentResponseSection";
import MoneyLostInput from "./MoneyLostInput";

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
      <StyledMultiSelect
        name="SupportReceived"
        label="Entities who provide cyber support"
        question={"Support Received"}
        values={organisations}
      />
      <StyledMultiSelect
        name="CyberCrimeType"
        label="Type of cyber crime"
        question={"Type of Cyber Crime"}
        values={cyberCrimes}
      />
      <MoneyLostInput name="EstimatedMoneyLost" label="£" />
      <ActionFraudSection />
      <IncidentResponseSection />
    </>
  );
};

export default CyberVictimModalContent;
