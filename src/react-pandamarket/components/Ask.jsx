import React, { useState } from "react";
import styles from "../styles/ask.module.scss";

const Ask = () => {
  const [ask, setAsk] = useState("");

  const handleChange = (e) => {
    setAsk(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setAsk("");
  };

  return (
    <div className={styles["wrapper"]}>
      <label id="asking">문의하기</label>

      <textarea
        name="asking"
        id="asking"
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        onChange={handleChange}
        value={ask}
      ></textarea>

      {ask ? (
        <button
          className={styles["add-button-active"]}
          onClick={(e) => handleClick(e)}
        >
          등록
        </button>
      ) : (
        <button className={styles["add-button"]}>등록</button>
      )}
    </div>
  );
};

export default Ask;
