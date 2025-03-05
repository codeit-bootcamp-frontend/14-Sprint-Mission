import { HTTP_STATUS, instance } from "./common-http";

const PATH = "/comments";

export async function updateComment(commentId, value) {
  try {
    const response = await instance.patch(`${PATH}/${commentId}`, value);
    if (response.status === HTTP_STATUS.STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("댓글 수정 중 오류가 발생했습니다.");
  }
}
export async function deleteComment(commentId) {
  try {
    const response = await instance.delete(`${PATH}/${commentId}`);
    if (response.status === HTTP_STATUS.STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("댓글 삭제 중 오류가 발생했습니다.");
  }
}
