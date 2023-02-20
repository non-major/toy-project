import { deleteUserForAdmin } from "../../api/deleteUserForAdmin";
import { UserType } from "../UserList/UserList";
import { useQueryClient, useMutation } from "react-query";
import {
  Container,
  Nickname,
  Email,
  Section,
  Button,
} from "./UserListItem.styles";

export const UserListItem = ({ id, nickname, email, status }: UserType) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(() => deleteUserForAdmin(id), {
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ["userList"],
        refetchActive: true,
      });
    },
  });

  return (
    <Container>
      <Section>
        <Nickname>{nickname}</Nickname>
        <Email>{email}</Email>
      </Section>
      <Section>{status === 1 ? "관리자" : "회원"}</Section>
      <Section>
        <Button onClick={() => mutation.mutate()} disabled={status === 1}>
          삭제
        </Button>
      </Section>
    </Container>
  );
};
