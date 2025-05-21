import axios from "axios";

const Base_URL = "https://panda-market-api.vercel.app";

interface Props {
  email: string;
  password: string;
}

export default async function signin(newUser: Props) {
  const response = await axios.post(`${Base_URL}/auth/signIn`, newUser);
  return response.data;
}
