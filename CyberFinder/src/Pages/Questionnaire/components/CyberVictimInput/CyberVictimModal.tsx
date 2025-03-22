import { Box, Button, Grid2, Modal, Tooltip, Typography } from "@mui/material";
import FormInputText from "../../common/components/FormInputText";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import StyledMultiSelect from "../../common/components/StyledMultiSelect";
interface Props {
  isModalOpen: boolean;
  handleClose: () => void;
}

const helperIcon = (
  <Tooltip title="SOC rating refers to your ovrall satisfaction with your SOC's performance in improving your businesses security">
    <QuestionMarkIcon sx={{ fontSize: 20, verticalAlign: "middle" }} />
  </Tooltip>
);

const values: string[] = [
  "name1",
  "name2",
  "name3",
  "name4",
  "name5",
  "name6",
  "name7",
  "name8",
  "name9",
];

const CyberVictimModal = ({ isModalOpen, handleClose }: Props) => {
  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
          maxWidth: "100%",
          alignItems: "stretch",
        }}
      >
        <Typography variant="h5">Cyber Victim Modal</Typography>
        <Grid2 container>
          <Grid2 size={12}>
            <StyledMultiSelect
              name="HelpSelection"
              label="Entities who provide cyber support"
              question={
                "Did you receive support from the following organisations?"
              }
              values={values}
            />
          </Grid2>
          <Grid2 size={12}>
            <FormInputText
              label="SOC mobile number"
              name="SOCMobile"
              required={false}
            />
          </Grid2>
          <Grid2 size={12}>
            <FormInputText
              label="Number of Employees"
              name="NumberSOCEmployees"
              required={false}
            />
          </Grid2>
          <Grid2 size={12}>
            <FormInputText
              label="SOC rating"
              name="SOCRating"
              icon={helperIcon}
              required={false}
            />
          </Grid2>
          <Button variant="contained" onClick={handleClose}>
            CLOSE
          </Button>
        </Grid2>
      </Box>
    </Modal>
  );
};

export default CyberVictimModal;
