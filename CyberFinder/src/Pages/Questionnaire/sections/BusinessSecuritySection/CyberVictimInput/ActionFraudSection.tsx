import { Collapse, Stack, Switch } from "@mui/material";
import { useState } from "react";
import ActionFraudDatePicker from "./ActionFraudDatePicker";
import FormInputText from "../../../common/components/FormInputText";

const ActionFraudSection = () => {
  const [showExtra, setShowExtra] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setShowExtra(event.target.checked);

  return (
    <>
      <Switch checked={showExtra} onChange={handleChange} />
      <Collapse in={showExtra}>
        <Stack>
          <ActionFraudDatePicker
            label={"Action Fraud Date Picker"}
            name={"AFDatePicker"}
            required={false}
          />
          <FormInputText
            label="ActionFraud Report Id"
            name="AFReportId"
            required={false}
          />
        </Stack>
      </Collapse>
    </>
  );
};

export default ActionFraudSection;
