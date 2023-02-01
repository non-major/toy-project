import { instance } from "./axiosInstance";

export const deleteUserForAdmin = (userId: string) => {
  if (confirm("정말로 삭제하시겠습니까?") === true) {
    instance.delete(`/api/users/admin/delete/${userId}`).then(
      () => console.log("회원 삭제 완료"),
      () => console.log("회원 삭제 에러"),
    );
  }
};
