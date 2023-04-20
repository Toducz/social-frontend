export type LoginRequestDto = {
  email: string;
  password: string;
};

export type LoginResponseDto = {
  idToken: string;
};
