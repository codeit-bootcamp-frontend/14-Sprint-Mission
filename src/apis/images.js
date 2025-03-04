import { multipartInstance, HTTP_STATUS } from "./common-http";

const PATH = "/images";

/**
 * 이미지 업로드
 * - 프로젝트에 저장하는 이미지들은 이 엔드포인트를 통해 업로드한 후 URL을 획득하여 사용합니다.
 * - 이미지 파일, 최대 용량은 5MB입니다.
 * @param {*} image
 * @returns
 */
export async function uploadImage(image) {
  try {
    const response = await multipartInstance.post(`${PATH}/upload`, { image });
    if (response.status === HTTP_STATUS.STATUS_CREATED) return response.data?.url;
  } catch (e) {
    console.log(e);
    throw new Error("이미지 업로드에 오류가 발생했습니다.");
  }
}
