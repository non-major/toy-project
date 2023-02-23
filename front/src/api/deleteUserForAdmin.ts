import { SetStateAction, Dispatch } from "react";
import { instance } from "./axiosInstance";

export const deleteUserForAdmin = async (
  userId: string,
  dispatch?: Dispatch<SetStateAction<number>>,
) => {
  if (confirm("정말로 삭제하시겠습니까?") === true) {
    instance.delete(`/api/users/admin/delete/${userId}`).then(
      () => {
        if (dispatch) {
          dispatch((state) => -1 * state);
        }
        console.log("회원 삭제 완료");
      },
      () => console.log("회원 삭제 에러"),
    );
  }
  location.reload();
};
