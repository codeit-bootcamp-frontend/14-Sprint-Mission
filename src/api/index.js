export async function addGetData({page,pageSize,orderBy,keyword}) {
  try {
    const query = `?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
    const response = await fetch(`https://panda-market-api.vercel.app/products${query}`);

    if (!response.ok) {
      throw new Error("데이터를 불러오는데 실패했습니다.");
    }

    return await response.json();
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
    throw error;
  }
}

export async function postProduct(product){
  try {
    const response = await fetch("https://panda-market-api.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error("서버 응답이 올바르지 않습니다.");
    }

    return await response.json();
  } catch (error) {
    console.error("상품 등록 실패:", error);
    throw error;
  }
}
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const data = await postProduct(product);
//     console.log("상품 등록 성공:", data);
//   } catch (error) {
//     console.error("상품 등록 에러:", error);
//   }
// };