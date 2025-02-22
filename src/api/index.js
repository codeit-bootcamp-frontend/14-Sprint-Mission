export async function addGetData(){
  const getData = await fetch('https://panda-market-api.vercel.app/products');
  const body = await getData.json();
  return body;
}

export async function addUserData(){
  const getData = await fetch('https://panda-market-api.vercel.app/users/me');
  const body = await getData.json();
  return body;
}

