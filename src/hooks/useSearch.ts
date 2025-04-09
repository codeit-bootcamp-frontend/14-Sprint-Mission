
type Props = {
    basis: string;
    keyword: string
};

const useSearch = ({ basis, keyword }: Props) => {
    const handleBasis = () => {
      if (basis === "최신순") {
        return "recent";
      } else {
        return "like";
      }
    };
      const orderBy = handleBasis();
      
      const fetchSearch = async () => {
          
      }
      fetchSearch();


  return {};
};

export default useSearch;
