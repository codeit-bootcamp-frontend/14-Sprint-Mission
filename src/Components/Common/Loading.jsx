const Loading = ({ categori }) => {
  return (
    <>
      {categori === "best" ? (
        <div
          className={`flex flex-col justify-center items-center mx-auto rounded-[20px] text-center text-gray-500 py-8 w-[343px] h-[439px] bg-black tablet:w-[696px] pc:w-[1200px] pc:h-[378px]`}
        >
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2" />
          <img
            src="https://media.giphy.com/media/2lSozishUgOcs0hGWd/giphy.gif?cid=ecf05e47j9pu3u9ecgwoabmbelphppud0czgwpe6fvfhmlbl&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="panda-loading-img"
            className="w-[150px] h-[150px] rounded-xl"
          />
        </div>
      ) : (
        <div className="flex  flex-col mt-[16px] mb-[120px] justify-center items-center mx-auto rounded-[20px] text-center text-gray-500 py-8 w-[343px] h-[343px] bg-black tablet:mt-[16px] tablet:w-[696px] pc:w-[1200px] pc:h-[400px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2" />
          <img
            src="https://media.giphy.com/media/2lSozishUgOcs0hGWd/giphy.gif?cid=ecf05e47j9pu3u9ecgwoabmbelphppud0czgwpe6fvfhmlbl&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="panda-loading-img"
            className="w-[150px] h-[150px] rounded-xl"
          />
        </div>
      )}
    </>

  );
};

export default Loading;
