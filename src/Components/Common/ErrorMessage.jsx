const ErrorMessage = ({
  message = "데이터를 불러오는데 실패했어요 🐼",
  onRetry,
  categori,
}) => {
  return (
    <>
      {categori === "best" ? (
        <div
          className={`flex flex-col justify-center items-center mx-auto rounded-[20px] text-center text-gray-500 py-8 w-[343px] h-[439px] bg-black tablet:w-[696px] pc:w-[1200px] pc:h-[378px]`}
        >
          <p className="mb-2">{message}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200"
            >
              다시 시도하기
            </button>
          )}
        </div>
      ) : (
        <div className="flex  flex-col mt-[16px] mb-[120px] justify-center items-center mx-auto rounded-[20px] text-center text-gray-500 py-8 w-[343px] h-[343px] bg-black tablet:mt-[16px] tablet:w-[696px] pc:w-[1200px] pc:h-[400px]">
          <p className="mb-2">{message}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200"
            >
              다시 시도하기
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
