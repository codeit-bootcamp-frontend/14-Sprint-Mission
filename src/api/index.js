export async function addGetData({page,pageSize,orderBy,keyword}){
  const query = `?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const getData = await fetch(`https://panda-market-api.vercel.app/products${query}`);
  if (!getData.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  const body = await getData.json();
  return body;
}
