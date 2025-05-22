const BASE_URL = process.env.REACT_APP_BASE_URL || "";

const handleError = async (res) => {
  try {
    const errorData = await res.json();
    throw new Error(errorData.message || "요청 처리 중 오류가 발생했습니다.");
  } catch {
    throw new Error("알 수 없는 오류가 발생했습니다.");
  }
};

// POST: 회원가입
const postSignUp = async (signUpData) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    });

    if (!res.ok) {
      return handleError(res);
    }

    return res.json();
  } catch (error) {
    console.error("회원가입 요청 실패:", error);
    throw new Error("회원가입 요청 중 네트워크 오류가 발생했습니다.");
  }
};

// POST: 로그인
const postSignIn = async (signInData) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/signIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signInData),
    });

    if (!res.ok) {
      return handleError(res);
    }

    return res.json();
  } catch (error) {
    console.error("로그인 요청 실패:", error);
    throw new Error("로그인 요청 중 네트워크 오류가 발생했습니다.");
  }
};

// POST: 토큰 갱신
const postRefreshToken = async (refreshToken) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!res.ok) {
      return handleError(res);
    }

    return res.json();
  } catch (error) {
    console.error("토큰 갱신 요청 실패:", error);
    throw new Error("토큰 갱신 요청 중 네트워크 오류가 발생했습니다.");
  }
};

export const authService = {
  postSignUp,
  postSignIn,
  postRefreshToken,
};
