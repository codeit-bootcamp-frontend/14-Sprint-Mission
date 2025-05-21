import axios from "axios";

const Base_URL = "https://panda-market-api.vercel.app";

interface Props {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

export default async function signUp(newUser: Props) {
    const response = await axios.post(`${Base_URL}/auth/signUp`, newUser);
    return response.data;
}
