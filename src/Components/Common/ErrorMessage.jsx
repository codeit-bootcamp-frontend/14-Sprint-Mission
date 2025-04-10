const ErrorMessage = ({
  message = "데이터를 불러오는데 실패했어요 😥",
  onRetry,
}) => {
  return (
    <div className="text-center text-red-500 py-8">
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
  );
};

export default ErrorMessage;
