import { BASE_URL } from "./constants/baseURL";

export async function getItem({
  orderBy = "recent",
  page = 1,
  pageSize = 10,
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const response = await fetch(`${BASE_URL}/products?${query}`);
  const body = await response.json();
  return body;
}

export async function uploadImg(image) {
  const url = `${BASE_URL}/images/upload`;
  const formData = new FormData();
  formData.append("image", image);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`이미지 업로드 실패 : ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log("이미지 POST 요청 실패", error);
  }
}

export async function getItemDetail(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch item detail: ${response.status}`);
  }
  const body = await response.json();
  return body;
}
