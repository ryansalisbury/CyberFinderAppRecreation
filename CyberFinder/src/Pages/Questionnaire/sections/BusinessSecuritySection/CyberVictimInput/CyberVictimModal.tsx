import { Box, Modal, Typography } from "@mui/material";
import CyberVictimModalContent from "./CyberVictimModalContent";
interface Props {
  isModalOpen: boolean;
  handleClose: () => void;
}

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
        <CyberVictimModalContent />
      </Box>
    </Modal>
  );
};

export default CyberVictimModal;
