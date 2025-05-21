import { useRouter } from "next/navigation";
import debounce from "@/utils/debounce";

const useItemSearchSync = (
  searchParams: URLSearchParams,
  setKeyword: (val: string) => void
) => {
  const router = useRouter();

  return debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);

    const nextParams = new URLSearchParams(searchParams);
    value === ""
      ? nextParams.delete("keyword")
      : nextParams.set("keyword", value);
    nextParams.set("page", "1");

    router.push(`?${nextParams.toString()}`);
  }, 300);
};

export default useItemSearchSync;
