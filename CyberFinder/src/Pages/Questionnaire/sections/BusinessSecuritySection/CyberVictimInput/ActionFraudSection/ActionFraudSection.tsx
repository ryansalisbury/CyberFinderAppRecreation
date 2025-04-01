import { Box, Collapse, Stack, Switch, Typography } from "@mui/material";
import { useState } from "react";
import ActionFraudDatePicker from "./ActionFraudDatePicker";
import FormInputText from "../../../../common/components/FormInputText";
import ActionFraudIDInput from "./ActionFraudIDInput";

const ActionFraudSection = () => {
  const [showExtra, setShowExtra] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setShowExtra(event.target.checked);

  return (
    <>
      <Stack direction={"row"} alignItems={"center"}>
        <Typography sx={{ width: 200 }} fontWeight="bold">
          Did you complete an ActionFraud report?
        </Typography>
        <Box width="stretch" alignContent={"center"}>
          <Switch checked={showExtra} onChange={handleChange} />
        </Box>
      </Stack>

      <Collapse in={showExtra}>
        <Stack>
          <ActionFraudDatePicker
            label="Action Fraud Date Picker"
            name="AFDatePicker"
            required={false}
          />
          <ActionFraudIDInput label="ActionFraud Report Id" name="AFReportId" />
        </Stack>
      </Collapse>
    </>
  );
};

export default ActionFraudSection;
