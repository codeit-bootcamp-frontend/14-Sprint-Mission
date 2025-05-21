import useWindowSize from "@/hooks/useWindowSize";

const columnList = {
  best: { desktop: 4, tablet: 2, mobile: 1 },
  all: { desktop: 10, tablet: 6, mobile: 4 },
};

const useItemPageResponsiveColumns = () => {
  const windowSize = useWindowSize({ desktop: 1200, tablet: 768 });

  return {
    pageSize: columnList.all[windowSize],
    bestSize: columnList.best[windowSize],
  };
};

export default useItemPageResponsiveColumns;
