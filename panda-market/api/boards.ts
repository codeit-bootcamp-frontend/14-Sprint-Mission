import { FormDataProps } from '@/app/addboard/AddBoard';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

const BASE_URL = 'https://panda-market-api.vercel.app';

interface UploadResponse {
  url: string;
}

export const postArticle = async (formData: FormDataProps) => {
  console.log('formdata', formData);
  let image = null;
  if (formData.imgFile) {
    image = await uploadImage(formData.imgFile);
  }
  const { title, content } = formData;
  try {
    const response = await fetchWithAuth(`${BASE_URL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, image }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log('보드 등록 실패', errorData);
    }

    const data = await response.json();
    const articleId = await data.id;

    return { success: true, boardId: articleId };
  } catch (error) {
    console.log('보드 등록 중 오류', error);
    return { success: false, error: error };
  }
};

export const uploadImage = async (file: File): Promise<string | undefined> => {
  try {
    const formData = new FormData();
    formData.append('image', file); // 'image' should match the server's expected field name

    const response = await fetchWithAuth(`${BASE_URL}/images/upload`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('이미지 업로드 실패:', errorData);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: UploadResponse = await response.json();
    console.log('이미지 업로드 성공', data);
    return data.url;
  } catch (error) {
    console.error('이미지 업로드 중 에러:', error);
    return undefined;
  }
};
