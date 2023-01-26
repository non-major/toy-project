import { Dispatch, SetStateAction } from "react";
import Modal from "../Modal/Modal";

interface ReportPageModalType {
  setModalState: Dispatch<SetStateAction<boolean>>;
}

const ReportPageModal = ({ setModalState }: ReportPageModalType) => {
  return (
    <Modal title={"신고 사유"} setModalState={setModalState}>
      할로
    </Modal>
  );
};

export default ReportPageModal;
