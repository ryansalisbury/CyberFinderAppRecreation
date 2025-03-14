import { Box, Grid2, Modal, Typography } from "@mui/material";
import FormInputText from "../../common/components/FormInputText";

interface Props {
  isModalOpen: boolean;
  handleClose: () => void;
}
const InternalSOCModal = ({ isModalOpen, handleClose }: Props) => {
  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5">Internal SOC Modal</Typography>
        <Grid2 container>
          <Grid2 size={8} padding={2}>
            <FormInputText label="SOC Contact Details" name="SOCEmail" />
          </Grid2>
        </Grid2>
      </Box>
    </Modal>
  );
};

export default InternalSOCModal;
