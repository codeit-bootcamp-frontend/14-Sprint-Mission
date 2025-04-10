const Loading = ({ message = "로딩 중입니다..." }) => {
  return (
    <div className="text-center text-gray-500 py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-500 mx-auto mb-2" />
      <p>{message}</p>
    </div>
  );
};

export default Loading;
