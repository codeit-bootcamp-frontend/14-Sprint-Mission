import { useRouter } from "next/navigation";


export const usePushQueryToURL = () => {
  const router = useRouter();

  const pushQueryToURL = (query: Record<string, any>) => {
    const queryString = toQueryString(query);

    if (router) {
      router.push(`${queryString}`, { scroll: false });
    }
  };

  return pushQueryToURL;
};

export const toQueryString = (params: Record<string, any>): string => {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      if (Array.isArray(value)) {
        value.forEach((v) => query.append(key, String(v)));
      } else {
        query.append(key, String(value));
      }
    }
  });
  return `?${query.toString()}`;
};