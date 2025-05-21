import { useSearchParams } from "next/navigation";

const useItemQueryParams = () => {
  const searchParams = useSearchParams();

  const keyword = searchParams?.get("keyword") || "";
  const sortBy =
    (searchParams?.get("sortBy") as "recent" | "favorite") || "recent";
  const page = Number(searchParams?.get("page")) || 1;

  return { keyword, sortBy, page, searchParams };
};

export default useItemQueryParams;
