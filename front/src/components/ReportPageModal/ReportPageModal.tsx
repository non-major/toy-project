import { Dispatch, SetStateAction } from "react";
import Modal from "../Modal/Modal";
import ModalContent from "./ModalContent/ModalContent";

interface ReportPageModalType {
  setModalState: Dispatch<SetStateAction<boolean>>;
  selectedPostId: string | null;
}

const ReportPageModal = ({
  setModalState,
  selectedPostId,
}: ReportPageModalType) => {
  return (
    <Modal title={"신고 사유"} setModalState={setModalState}>
      <ModalContent
        selectedPostId={selectedPostId}
        setModalState={setModalState}
      />
    </Modal>
  );
};

export default ReportPageModal;
