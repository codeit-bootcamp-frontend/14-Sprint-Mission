/**
 * 기본 URL을 사용하여 fetch 요청을 보내는 함수를 생성합니다.
 * @param {string} defaultUrl - 기본 URL
 * @returns {function(string, RequestInit): Promise<{status: number, result: any}>} 실제 fetch 함수
 */
const makeFetcher = (defaultUrl) => async (url, options) => {
  let fullUrl = defaultUrl + url;

  try {
    const result = await fetch(fullUrl, options);
    const data = await result.json();

    return { status: result.status, result: data };
  } catch (error) {
    return { status: error?.status ?? 500, result: error.message };
  }
};

const fetcher = makeFetcher("https://panda-market-api.vercel.app");
export default fetcher;
