/**
 * 기본 URL을 사용하여 fetch 요청을 보내는 함수를 생성합니다.
 * @param {string} defaultUrl - 기본 URL
 * @returns {function(string, RequestInit): Promise<{status: number, result: any}>} 실제 fetch 함수
 */
const makeFetcher =
  (defaultUrl: string) =>
  async <T, E extends Error = Error>(
    url: string,
    options?: RequestInit
  ): Promise<{ status: number; result: T }> => {
    let fullUrl = defaultUrl + url;

    try {
      const result = await fetch(fullUrl, options);

      if (result.ok) {
        const data = (await result.json()) as T;
        return { status: result.status, result: data };
      }

      throw new Error(result.statusText);
    } catch (error) {
      const err = error as E;
      throw new Error(err.message);
    }
  };

const fetcher = makeFetcher("https://panda-market-api.vercel.app");
export default fetcher;
