import { useMutation } from '@tanstack/react-query';
import { requestor } from '@/lib/requestor'; // axios 인스턴스



export const useUploadImage = (openModal: (msg: string) => void ,onSuccessCallback: (url: string) => void) => {
  return useMutation({
    mutationFn: async ( file:File ) => {
      const formData = new FormData();
      formData.append('image', file);

      const res = await requestor.post<{ url: string }>('/images/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return res.data.url;
    },

    onSuccess: (url) => {
      onSuccessCallback(url);
    },

    // 💡 openModal은 mutation 호출 시 외부에서 핸들링 권장 (mutationFn에 묶는 건 anti-pattern일 수 있음)
    onError: (error: any) => {
      const message = error?.response?.data?.message || '이미지 업로드 실패';
      openModal(message);
    },
  });
};
