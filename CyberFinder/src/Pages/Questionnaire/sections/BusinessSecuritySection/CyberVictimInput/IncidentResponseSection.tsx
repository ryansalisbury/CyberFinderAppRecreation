import { Collapse, Stack, Switch, Typography } from "@mui/material";
import { useState } from "react";
import StyledMultiSelect from "../../../common/components/StyledMultiSelect";

const IncidentResponseSection = () => {
  const [showExtra, setShowExtra] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setShowExtra(event.target.checked);
  const reasons: string[] = [
    "Too expensive",
    "Unsure of the process",
    "None of the above",
  ];
  return (
    <>
      <Stack direction="row" alignContent="flex-start">
        <Typography sx={{ width: 200 }} fontWeight="bold">
          External Company used?
        </Typography>
        <Switch checked={showExtra} onChange={handleChange} />
      </Stack>
      <Collapse in={showExtra}>
        <Stack>
          <StyledMultiSelect
            name="ReasonNoSupportUsed"
            label="Reasons for not getting support"
            question={"Reasons for not getting support: "}
            values={reasons}
          />
        </Stack>
      </Collapse>
    </>
  );
};

export default IncidentResponseSection;
