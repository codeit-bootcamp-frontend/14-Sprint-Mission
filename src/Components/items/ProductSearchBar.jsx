import searchIcon from "../../assets/search-icon.png";

const ProductSearchBar = ({
  placeholder = "검색할 상품을 입력해주세요",
  className = "",
  searchKeyword,
  setSearchKeyword,
}) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src={searchIcon}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
        alt="search icon"
      />
      <input
        type="text"
        placeholder={placeholder}
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        className="w-full pl-10 py-2 rounded-[12px] border border-gray-300"
      />
    </div>
  );
};

export default ProductSearchBar;
