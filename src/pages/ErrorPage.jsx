import { Link } from "react-router-dom";

import Nav from "../Components/Common/Nav";

const ErrorPage = () => {
  return (
    <>
      <Nav darkMode={true} />
      <div className="flex flex-col items-center h-screen text-center bg-gradient-to-b from-[#1f1f1f] to-[#3a3a3a] text-white">
        <img
          src="https://media.giphy.com/media/67Th5CviFoMlDZGtp0/giphy.gif?cid=ecf05e4716z2ys84zfz6danhngw4xd78af56wd964rqpb9r2&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="귀여운 판다"
          className="w-[200px] h-[200px] mb-6 rounded-xl mt-36 "
        />
        <h1 className="text-2xl font-bold text-white mb-2">
          앗! 페이지를 찾을 수 없어요
        </h1>
        <p className="text-gray-300 mb-6">
          입력하신 경로가 올바르지 않아요. 판다가 길을 잃었어요 🐼
        </p>
        <Link
          to={"/"}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
