import { Box, Button, Grid2, Modal, Tooltip, Typography } from "@mui/material";
import FormInputText from "../../../common/components/FormInputText";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
interface Props {
  isModalOpen: boolean;
  handleClose: () => void;
}

const helperIcon = (
  <Tooltip title="SOC rating refers to your ovrall satisfaction with your SOC's performance in improving your businesses security">
    <QuestionMarkIcon sx={{ fontSize: 20, verticalAlign: "middle" }} />
  </Tooltip>
);

const InternalSOCModal = ({ isModalOpen, handleClose }: Props) => {
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
        <Typography variant="h5">Internal SOC Modal</Typography>
        <Grid2 container>
          <Grid2 size={12}>
            <FormInputText
              label="SOC email address"
              name="SOCEmail"
              required={false}
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

export default InternalSOCModal;
