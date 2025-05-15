export const validationRules = {
  email: {
    required: '이메일은 필수입니다.',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: '유효한 이메일을 입력해주세요.',
    },
  },  
  nickname: {
    required: '닉네임을 입력해주세요.',
    pattern: {
      value: /^([a-z]|[A-Z]|[0-9]|[!@#$%^&*])+$/,
      message: '영문, 숫자, 특수문자(!@#$%^&*)만 입력 가능합니다.',
    },
    minLength: {
      value: 1,
      message: '1자 이상 입력해주세요.',
    },
    maxLength: {
      value: 20,
      message: '20자 이하로 입력해주세요.',
    },
  },
  password: {
    required: '비밀번호는 필수입니다.',
    minLength: {
      value: 8,
      message: '8자 이상 입력해주세요.',
    },
    maxLength: {
      value: 20,
      message: '20자 이하로 입력해주세요.',
    },
  },
  passwordConfirmation: (password: string) => ({
    required: '비밀번호 확인은 필수입니다.',
    validate: (value: string) => value === password || '비밀번호가 일치하지 않습니다.',
  }),
  productName: {
    required: '상품 이름은 필수입니다.',
    minLength: {
      value: 1,
      message: '상품 이름은 1자 이상 입력해주세요.',
    },
    maxLength: {
      value: 30,
      message: '상품 이름은 30자 이하로 입력해주세요.',
    },
  },
  content: {
    required: '내용은 필수입니다.',
    minLength: {
      value: 1,
      message: '내용을 입력해주세요.',
    },
  },
  title: {
    required: '제목은 필수입니다.',
    minLength: {
      value: 1,
      message: '제목은 1자 이상 입력해주세요.',
    },
    maxLength: {
      value: 50,
      message: '제목은 50자 이하로 입력해주세요.',
    },
  },
};
